import { simkesPrisma, simrsPrisma } from "../config/db.js";
import {
  sendAssignedStaffEmailtoPatient,
  sendEmailtoAmbulanceStaff,
  sendUpdatedEmergencyStatusEmailToPatient,
} from "../config/email.js";
import {
  sendAssignedStaffWhatsAppToPatient,
  sendUpdatedEmergencyStatusWhatsAppToPatient,
  sendWhatsAppToAmbulanceStaff,
} from "../config/whatsapp.js";
import ApiError from "../utils/apiError.js";
import { getUserRole } from "../utils/getUserRole.js";

export const createEmergencyRequest = async ({
  patientIdentity,
  location,
  note,
}) => {
  // Check if any emergency request is not completed with the same patient
  const existingEmergency = await simkesPrisma.emergencyRequest.findFirst({
    where: { patientIdentity, status: { not: "COMPLETED" } },
  });
  if (existingEmergency) {
    throw new ApiError("Emergency request already exists", 400);
  }

  // Ambil data pasien dari simrsPrisma
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity: patientIdentity },
  });

  if (!patient) {
    throw new ApiError("Patient not found", 404);
  }

  const locationString = location.join(",");
  const result = await simkesPrisma.emergencyRequest.create({
    data: {
      patientIdentity,
      location: locationString,
      note,
      status: "PENDING",
    },
  });

  // Gabungkan data emergency dengan data pasien
  const resultWithPatient = {
    ...result,
    patient,
  };

  // broadcast/notify all ambulance staff (simple approach: notify all staff)
  const staffs = await simkesPrisma.ambulanceStaff.findMany();
  for (const s of staffs) {
    sendEmailtoAmbulanceStaff({
      email: s.email,
      staffName: s.name,
      emergencyId: result.id,
      patientName: patient.name,
      location: result.location,
      note: result.note,
    });
    sendWhatsAppToAmbulanceStaff({
      phone: s.phone,
      staffName: s.name,
      emergencyId: result.id,
      patientName: patient.name,
      location: result.location,
      note: result.note,
    });
  }

  return resultWithPatient;
};

export const getAllEmergencies = async (query, user) => {
  const { page = 1, limit = 10, search, sortBy, sortOrder } = query;
  
  // Jika ada pencarian berdasarkan nama pasien, kita perlu pendekatan berbeda
  let patientIdentities = [];
  if (search) {
    // Cari pasien berdasarkan nama di simrsPrisma
    const patients = await simrsPrisma.patient.findMany({
      where: {
        name: { contains: search, mode: "insensitive" },
      },
      select: {
        identity: true,
      },
    });

    patientIdentities = patients.map((p) => p.identity);

    // Jika tidak ada pasien yang ditemukan dengan nama tersebut, kembalikan hasil kosong
    if (patientIdentities.length === 0) {
      return {
        results: [],
        pagination: {
          total: 0,
          page: Number(page),
          limit: Number(limit),
          totalPages: 0,
        },
      };
    }
  }

  // Jika user adalah patient, hanya tampilkan emergency request miliknya
  let userRole = null;
  let isPatient = false;
  
  if (user) {
    try {
      userRole = getUserRole(user);
      isPatient = userRole.role === "PATIENT" && userRole.subrole === "PATIENT";
    } catch (error) {
      // Jika getUserRole gagal, anggap bukan patient
      isPatient = false;
    }
  }
  
  const filters = {
    ...(search ? { patientIdentity: { in: patientIdentities } } : {}),
    ...(isPatient ? { patientIdentity: user.identity } : {}),
  };

  const orderBy = {};
  if (sortBy && ["createdAt", "status"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "desc";
  } else {
    orderBy["createdAt"] = "desc";
  }

  const [emergencies, total] = await Promise.all([
    simkesPrisma.emergencyRequest.findMany({
      where: filters,
      include: { assignedTo: true },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.emergencyRequest.count({ where: filters }),
  ]);

  // Ambil data pasien untuk semua emergency requests
  const patientIds = emergencies.map((e) => e.patientIdentity);
  const patients = await simrsPrisma.patient.findMany({
    where: {
      identity: { in: patientIds },
    },
  });

  // Buat map untuk mempermudah pencarian pasien berdasarkan identity
  const patientMap = patients.reduce((map, patient) => {
    map[patient.identity] = patient;
    return map;
  }, {});

  // Gabungkan data emergency dengan data pasien
  const results = emergencies.map((emergency) => ({
    ...emergency,
    patient: patientMap[emergency.patientIdentity] || null,
  }));

  return {
    results,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit) || 1),
    },
  };
};

export const getEmergencyById = async (id, user) => {
  const emergency = await simkesPrisma.emergencyRequest.findUnique({
    where: { id },
    include: {
      assignedTo: true,
      histories: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!emergency) throw new ApiError("Emergency request not found", 404);

  // Cek apakah user adalah patient dan hanya boleh melihat emergency miliknya
  let userRole = null;
  let isPatient = false;
  
  if (user) {
    try {
      userRole = getUserRole(user);
      isPatient = userRole.role === "PATIENT" && userRole.subrole === "PATIENT";
    } catch (error) {
      // Jika getUserRole gagal, anggap bukan patient
      isPatient = false;
    }
  }
  
  if (isPatient && emergency.patientIdentity !== user.identity) {
    throw new ApiError("You are not authorized to view this emergency request", 403);
  }

  // Ambil data pasien dari simrsPrisma
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity: emergency.patientIdentity },
  });

  // Gabungkan data emergency dengan data pasien
  return {
    ...emergency,
    patient,
  };
};

export const assignEmergencyToStaff = async ({
  emergencyId,
  staffId,
  location,
  note,
}) => {
  const emergency = await simkesPrisma.emergencyRequest.findUnique({
    where: { id: emergencyId },
  });
  if (!emergency) throw new ApiError("Emergency request not found", 404);
  if (emergency.assignedToId) {
    throw new ApiError("Emergency already assigned", 400);
  }

  const staff = await simkesPrisma.ambulanceStaff.findUnique({
    where: { id: staffId },
  });
  if (!staff) throw new ApiError("Ambulance staff not found", 404);

  // Ambil data pasien dari simrsPrisma
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity: emergency.patientIdentity },
  });
  if (!patient) throw new ApiError("Patient not found", 404);

  const now = new Date();

  const locationString = location.join(",");
  const result = await simkesPrisma.$transaction(async (tx) => {
    const assign = await tx.emergencyRequest.update({
      where: { id: emergencyId },
      data: {
        assignedToId: staffId,
        status: "ASSIGNED",
        updatedAt: now,
      },
    });

    await tx.emergencyHistory.create({
      data: {
        emergencyRequestId: emergencyId,
        status: "ASSIGNED",
        ambulanceStaffLocation: locationString,
        note: note,
      },
    });

    const full = await tx.emergencyRequest.findUnique({
      where: { id: assign.id },
      include: {
        assignedTo: true,
        histories: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    return full;
  });

  // Gabungkan data emergency dengan data pasien
  const resultWithPatient = {
    ...result,
    patient,
  };

  sendAssignedStaffEmailtoPatient({
    email: patient.phoneNumber, // Menggunakan phoneNumber sebagai email (sesuaikan jika ada field email)
    patientName: patient.name,
    staffName: staff.name,
    emergencyId: result.id,
    location: locationString,
    note: note,
    status: result.status,
  });

  sendAssignedStaffWhatsAppToPatient({
    phone: patient.phoneNumber,
    staffName: staff.name,
    emergencyId: result.id,
    patientName: patient.name,
    location: locationString,
    note: note,
    status: result.status,
  });

  return resultWithPatient;
};

export const updateEmergencyStatus = async ({
  emergencyId,
  status,
  note,
  location,
}) => {
  const emergency = await simkesPrisma.emergencyRequest.findUnique({
    where: { id: emergencyId },
  });
  if (!emergency) throw new ApiError("Emergency request not found", 404);

  // Ambil data pasien dari simrsPrisma
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity: emergency.patientIdentity },
  });
  if (!patient) throw new ApiError("Patient not found", 404);

  const locationString = location.join(",");
  const updated = await simkesPrisma.$transaction(async (tx) => {
    const r = await tx.emergencyRequest.update({
      where: { id: emergencyId },
      data: { status, updatedAt: new Date() },
      include: {
        assignedTo: true,
      },
    });

    await tx.emergencyHistory.create({
      data: {
        ambulanceStaffLocation: locationString,
        emergencyRequestId: emergencyId,
        status,
        note,
      },
    });

    return r;
  });

  // Gabungkan data emergency dengan data pasien
  const updatedWithPatient = {
    ...updated,
    patient,
  };

  // Notify patient/family about status updates
  if (patient?.phoneNumber) {
    sendUpdatedEmergencyStatusWhatsAppToPatient({
      phone: patient.phoneNumber,
      staffName: updated.assignedTo.name,
      emergencyId: updated.id,
      patientName: patient.name,
      location: locationString,
      note: note,
      status: updated.status,
    });
  }

  // Menggunakan phoneNumber sebagai email (sesuaikan jika ada field email)
  if (patient?.phoneNumber) {
    sendUpdatedEmergencyStatusEmailToPatient({
      email: patient.phoneNumber,
      patientName: patient.name,
      staffName: updated.assignedTo.name,
      emergencyId: updated.id,
      location: locationString,
      note: note,
      status: updated.status,
    });
  }

  return updatedWithPatient;
};
