import prisma from "../config/db.js";
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

export const createEmergencyRequest = async ({ patientId, location, note }) => {
  // Check if any emergency request is not completed with the same patient
  const existingEmergency = await prisma.emergencyRequest.findFirst({
    where: { patientId, status: { not: "COMPLETED" } },
  });
  if (existingEmergency) {
    throw new ApiError("Emergency request already exists", 400);
  }

  const locationString = location.join(",");
  const result = await prisma.emergencyRequest.create({
    data: {
      patientId,
      location: locationString,
      note,
      status: "PENDING",
    },
    include: {
      patient: true,
    },
  });

  // broadcast/notify all ambulance staff (simple approach: notify all staff)
  const staffs = await prisma.ambulanceStaff.findMany();
  for (const s of staffs) {
    sendEmailtoAmbulanceStaff({
      email: s.email,
      staffName: s.name,
      emergencyId: result.id,
      patientName: result.patient.name,
      location: result.location,
      note: result.note,
    });
    sendWhatsAppToAmbulanceStaff({
      phone: s.phone,
      staffName: s.name,
      emergencyId: result.id,
      patientName: result.patient.name,
      location: result.location,
      note: result.note,
    });
  }

  return result;
};

export const getEmergencyById = async (id) => {
  const emergency = await prisma.emergencyRequest.findUnique({
    where: { id },
    include: {
      patient: true,
      assignedTo: true,
      histories: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!emergency) throw new ApiError("Emergency request not found", 404);
  return emergency;
};

export const getAllEmergencies = async (query) => {
  const { page = 1, limit = 10, search, sortBy, sortOrder } = query;

  const filters = {};
  if (search) {
    // search by patient name
    filters.patient = { name: { contains: search, mode: "insensitive" } };
  }

  const orderBy = {};
  if (sortBy && ["createdAt", "status"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "desc";
  } else {
    orderBy["createdAt"] = "desc";
  }

  const [results, total] = await Promise.all([
    prisma.emergencyRequest.findMany({
      where: filters,
      include: { patient: true, assignedTo: true },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    prisma.emergencyRequest.count({ where: filters }),
  ]);

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

export const assignEmergencyToStaff = async ({
  emergencyId,
  staffId,
  location,
  note,
}) => {
  const emergency = await prisma.emergencyRequest.findUnique({
    where: { id: emergencyId },
  });
  if (!emergency) throw new ApiError("Emergency request not found", 404);
  if (emergency.assignedToId) {
    throw new ApiError("Emergency already assigned", 400);
  }

  const staff = await prisma.ambulanceStaff.findUnique({
    where: { id: staffId },
  });
  if (!staff) throw new ApiError("Ambulance staff not found", 404);

  const now = new Date();

  const locationString = location.join(",");
  const result = await prisma.$transaction(async (tx) => {
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
        patient: true,
        assignedTo: true,
        histories: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    return full;
  });

  sendAssignedStaffEmailtoPatient({
    email: result.patient.email,
    patientName: result.patient.name,
    staffName: staff.name,
    emergencyId: result.id,
    location: locationString,
    note: note,
    status: result.status,
  });

  sendAssignedStaffWhatsAppToPatient({
    phone: result.patient.phone,
    staffName: staff.name,
    emergencyId: result.id,
    patientName: result.patient.name,
    location: locationString,
    note: note,
    status: result.status,
  });

  return result;
};

export const updateEmergencyStatus = async ({
  emergencyId,
  status,
  note,
  location,
}) => {
  const emergency = await prisma.emergencyRequest.findUnique({
    where: { id: emergencyId },
  });
  if (!emergency) throw new ApiError("Emergency request not found", 404);

  const locationString = location.join(",");
  const updated = await prisma.$transaction(async (tx) => {
    const r = await tx.emergencyRequest.update({
      where: { id: emergencyId },
      data: { status, updatedAt: new Date() },
      include: {
        assignedTo: true,
        patient: true,
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

  // Optionally notify patient/family about status updates
  const patient = await prisma.patient.findUnique({
    where: { id: emergency.patientId },
  });

  if (patient?.phone) {
    sendUpdatedEmergencyStatusWhatsAppToPatient({
      phone: patient.phone,
      staffName: updated.assignedTo.name,
      emergencyId: updated.id,
      patientName: updated.patient.name,
      location: locationString,
      note: note,
      status: updated.status,
    });
  }
  if (patient?.email) {
    sendUpdatedEmergencyStatusEmailToPatient({
      email: patient.email,
      patientName: patient.name,
      staffName: updated.assignedTo.name,
      emergencyId: updated.id,
      location: locationString,
      note: note,
      status: updated.status,
    });
  }

  return updated;
};
