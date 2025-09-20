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

export const getAllEmergencies = async (query, user, role) => {
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
  const isPatient = role === "PATIENT";

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

export const getEmergencyById = async (id, user, role) => {
  const emergency = await simkesPrisma.emergencyRequest.findUnique({
    where: { id },
    include: {
      assignedTo: true,
      histories: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!emergency) throw new ApiError("Emergency request not found", 404);

  // Cek apakah user adalah patient dan hanya boleh melihat emergency miliknya
  const isPatient = role === "PATIENT";

  if (isPatient && emergency.patientIdentity !== user.identity) {
    throw new ApiError(
      "You are not authorized to view this emergency request",
      403
    );
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
  staffIdentity,
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
    where: { identity: staffIdentity },
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

export const getEmergencyStats = async ({
  startDate,
  endDate,
  groupBy = "day",
}) => {
  // Set default date range to last 30 days if not provided
  const end = endDate ? new Date(`${endDate}T23:59:59Z`) : new Date();
  const start = startDate
    ? new Date(`${startDate}T00:00:00Z`)
    : new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Get all emergency requests in the date range
  const emergencyRequests = await simkesPrisma.emergencyRequest.findMany({
    where: {
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    include: {
      histories: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  // Calculate statistics
  const totalRequests = emergencyRequests.length;

  // Count by status
  const statusCounts = emergencyRequests.reduce((acc, request) => {
    acc[request.status] = (acc[request.status] || 0) + 1;
    return acc;
  }, {});

  // Calculate average response time (time between PENDING and ASSIGNED)
  let totalResponseTime = 0;
  let requestsWithResponse = 0;

  // Calculate average completion time (time between PENDING and COMPLETED)
  let totalCompletionTime = 0;
  let completedRequests = 0;

  emergencyRequests.forEach((request) => {
    const histories = request.histories.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

    const pendingTime = request.createdAt;
    const assignedHistory = histories.find((h) => h.status === "ASSIGNED");
    const completedHistory = histories.find((h) => h.status === "COMPLETED");

    if (assignedHistory) {
      const responseTime =
        new Date(assignedHistory.createdAt) - new Date(pendingTime);
      totalResponseTime += responseTime;
      requestsWithResponse++;
    }

    if (completedHistory) {
      const completionTime =
        new Date(completedHistory.createdAt) - new Date(pendingTime);
      totalCompletionTime += completionTime;
      completedRequests++;
    }
  });

  const averageResponseTimeMs =
    requestsWithResponse > 0 ? totalResponseTime / requestsWithResponse : 0;

  const averageCompletionTimeMs =
    completedRequests > 0 ? totalCompletionTime / completedRequests : 0;

  // Convert to minutes for better readability
  const averageResponseTimeMinutes = Math.round(
    averageResponseTimeMs / (1000 * 60)
  );
  const averageCompletionTimeMinutes = Math.round(
    averageCompletionTimeMs / (1000 * 60)
  );

  // Group data by time period
  const timeSeriesData = groupEmergencyRequestsByTime(
    emergencyRequests,
    groupBy
  );

  return {
    summary: {
      totalRequests,
      statusCounts,
      averageResponseTimeMinutes,
      averageCompletionTimeMinutes,
      pendingRequests: statusCounts.PENDING || 0,
      completedRequests: statusCounts.COMPLETED || 0,
    },
    timeSeriesData,
  };
};

// Helper function to group emergency requests by time period
function groupEmergencyRequestsByTime(requests, groupBy) {
  const groupedData = {};

  requests.forEach((request) => {
    let timeKey;
    const date = new Date(request.createdAt);

    switch (groupBy) {
      case "day":
        timeKey = date.toISOString().split("T")[0]; // YYYY-MM-DD
        break;
      case "week":
        // Get the week number and year
        const weekNumber = getWeekNumber(date);
        timeKey = `${date.getFullYear()}-W${weekNumber}`;
        break;
      case "month":
        timeKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}`;
        break;
      default:
        timeKey = date.toISOString().split("T")[0];
    }

    if (!groupedData[timeKey]) {
      groupedData[timeKey] = {
        period: timeKey,
        count: 0,
        byStatus: {},
      };
    }

    groupedData[timeKey].count++;

    // Count by status
    if (!groupedData[timeKey].byStatus[request.status]) {
      groupedData[timeKey].byStatus[request.status] = 0;
    }
    groupedData[timeKey].byStatus[request.status]++;
  });

  // Convert to array and sort by time
  return Object.values(groupedData).sort((a, b) =>
    a.period.localeCompare(b.period)
  );
}

// Helper function to get week number
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
