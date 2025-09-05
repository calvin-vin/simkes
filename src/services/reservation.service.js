import dayjs from "dayjs";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { generateQr } from "../utils/generateQr.js";
import {
  saveQRCode,
  getQRCodeByReservationId,
  deleteQRCode,
} from "./qrcode.service.js";
import { isPatientWithinHospitalRange } from "./hospitalLocation.service.js";
import { getUserRole } from "../utils/getUserRole.js";

/**
 * Get the day name in Indonesian
 * @param {string} date - Date string
 * @returns {string} Day name in Indonesian
 */
const getDayName = (date) => {
  const dayNames = {
    0: "MINGGU",
    1: "SENIN",
    2: "SELASA",
    3: "RABU",
    4: "KAMIS",
    5: "JUMAT",
    6: "SABTU",
  };
  const dayIndex = dayjs(date).day();
  return dayNames[dayIndex];
};

/**
 * Generate a unique reservation ID compatible with simrsPrisma model
 * @returns {string} Unique reservation ID for 'norec' field
 */
const generateReservationId = () => {
  // Generate UUID v4 for the norec field
  return uuidv4();
};

/**
 * Get queue number for online reservation
 * @param {number} doctorId - Doctor ID
 * @param {string} date - Reservation date
 * @returns {Object} Queue numbers for morning and afternoon sessions
 */
/**
 * Check-in a reservation
 * @param {string} id - Reservation ID
 * @param {number} latitude - Patient's current latitude
 * @param {number} longitude - Patient's current longitude
 * @returns {Object} Updated reservation
 */
export const checkinReservation = async (id, latitude, longitude, identity) => {
  // Find the reservation
  const reservation = await simrsPrisma.reservation.findFirst({
    where: {
      id,
      isEnabled: true,
      identity: identity,
      notes: "SIMKES",
    },
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Check if reservation is already confirmed
  if (reservation.isConfirmed) {
    throw new ApiError("Reservasi sudah dikonfirmasi sebelumnya", 400);
  }

  // Check if reservation is cancelled
  if (reservation.isCancelled) {
    throw new ApiError("Reservasi sudah dibatalkan", 400);
  }

  // Check if patient is within hospital range (1 km)
  const isWithinRange = await isPatientWithinHospitalRange(
    latitude,
    longitude,
    1
  );

  if (!isWithinRange) {
    throw new ApiError(
      "Anda berada di luar jangkauan rumah sakit. Silakan datang ke lokasi rumah sakit untuk check-in",
      400
    );
  }

  // Check if it's within valid check-in time (from 06:00 on reservation day until reservation time)
  const reservationTime = dayjs(reservation.reservationDate);
  const currentTime = dayjs();
  const reservationDate = reservationTime.format("YYYY-MM-DD");
  const checkInStartTime = dayjs(`${reservationDate} 06:00:00`);

  // Check if current time is before 06:00 on reservation day
  // if (currentTime.isBefore(checkInStartTime)) {
  //   throw new ApiError(
  //     `Anda hanya dapat check-in mulai pukul 06:00 pada tanggal reservasi. Jadwal reservasi Anda pada ${reservationTime.format(
  //       "DD/MM/YYYY HH:mm"
  //     )}`,
  //     400
  //   );
  // }

  // // Check if current time is after reservation time
  // if (currentTime.isAfter(reservationTime)) {
  //   throw new ApiError(
  //     `Waktu check-in telah berakhir. Jadwal reservasi Anda pada ${reservationTime.format(
  //       "DD/MM/YYYY HH:mm"
  //     )}`,
  //     400
  //   );
  // }

  // Update reservation to confirmed
  const updatedReservation = await simrsPrisma.reservation.update({
    where: {
      id,
    },
    data: {
      isConfirmed: true,
    },
  });

  return updatedReservation;
};

export const getQueueNumberOnline = async (doctorId, date) => {
  const reservationDate = dayjs(date).format("YYYY-MM-DD");

  // Get morning reservations
  const morningReservations = await simrsPrisma.reservation.count({
    where: {
      doctorId: doctorId,
      reservationDate: {
        gte: new Date(`${reservationDate} 00:00:00`),
        lt: new Date(`${reservationDate} 12:00:00`),
      },
      queueType: {
        startsWith: "EA",
      },
      isEnabled: true,
      notes: "SIMKES", // Filter reservations from SIMKES application
    },
  });

  // Get afternoon reservations
  const afternoonReservations = await simrsPrisma.reservation.count({
    where: {
      doctorId: doctorId,
      reservationDate: {
        gte: new Date(`${reservationDate} 12:00:00`),
        lt: new Date(`${reservationDate} 23:59:59`),
      },
      queueType: {
        startsWith: "EB",
      },
      isEnabled: true,
      notes: "SIMKES", // Filter reservations from SIMKES application
    },
  });

  return {
    pagi: morningReservations,
    siang: afternoonReservations,
  };
};

/**
 * Get next queue number
 * @param {number} doctorId - Doctor ID
 * @param {string} date - Reservation date
 * @returns {number} Next queue number
 */
export const getNextQueueNumber = async (doctorId, date) => {
  const reservationDate = dayjs(date).format("YYYY-MM-DD");

  const reservation = await simrsPrisma.reservation.findFirst({
    where: {
      doctorId: doctorId,
      reservationDate: {
        gte: new Date(`${reservationDate} 00:00:00`),
        lt: new Date(`${reservationDate} 23:59:59`),
      },
      isEnabled: true,
      notes: "SIMKES", // Filter reservations from SIMKES application
    },
    orderBy: {
      queueNumber: "desc",
    },
    select: {
      queueNumber: true,
    },
  });

  return (reservation?.queueNumber || 0) + 1;
};

/**
 * Get all reservations
 * @param {Object} query - Query parameters including filters, pagination, and sorting
 * @returns {Promise<Object>} Paginated reservations with data and pagination info
 */
export const getAllReservations = async (query, user) => {
  const {
    doctorId,
    unitId,
    date,
    isCancelled,
    isConfirmed,
    callStatus,
    page = 1,
    limit = 10,
  } = query;

  const { role } = getUserRole(user);
  const isPatient = role === "PATIENT";
  const identity = user.identity;

  // Build filters object
  const filters = {
    isEnabled: true,
    // unitId is non-nullable in schema, ensure we only query records with valid unitId
    unitId: unitId ? Number(unitId) : { gt: 0 }, // Filter for records with unitId > 0 to avoid null values
    notes: "SIMKES", // Filter reservations from SIMKES application
    ...(doctorId ? { doctorId: Number(doctorId) } : {}),
    ...(isPatient ? { identity } : {}),
    ...(isCancelled !== undefined
      ? { isCancelled: isCancelled === "true" }
      : {}),
    ...(isConfirmed !== undefined
      ? { isConfirmed: isConfirmed === "true" }
      : {}),
    ...(callStatus !== undefined ? { callStatus } : {}),
  };

  // Add date filter if provided
  if (date) {
    const filterDate = dayjs(date).format("YYYY-MM-DD");
    filters.reservationDate = {
      gte: new Date(`${filterDate} 00:00:00`),
      lt: new Date(`${filterDate} 23:59:59`),
    };
  }

  // Default sorting: reservationDate desc, callStatus asc, queueNumber asc
  const orderBy = [
    { reservationDate: "desc" },
    { queueNumber: "asc" },
    { callStatus: "asc" },
  ];

  // Execute queries in parallel for better performance
  const [reservations, total] = await Promise.all([
    simrsPrisma.reservation.findMany({
      where: filters,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy,
      include: {
        patient: true,
        doctor: true,
        unit: true,
        paymentMethod: true,
        referralSource: true,
      },
    }),
    simrsPrisma.reservation.count({ where: filters }),
  ]);

  // Get QR code information for each reservation
  const reservationsWithQrCode = await Promise.all(
    reservations.map(async (reservation) => {
      try {
        const qrCode = await getQRCodeByReservationId(reservation.id);
        return { ...reservation, qrCodeUrl: qrCode.qrCodeUrl };
      } catch (error) {
        // QR code not found, continue without it
        return { ...reservation, qrCodeUrl: null };
      }
    })
  );

  return {
    results: reservationsWithQrCode,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

/**
 * Get reservation by ID
 * @param {string} id - Reservation ID
 * @param {string} identity - User identity for filtering
 * @returns {Promise<Object>} Reservation details
 * @throws {ApiError} If reservation not found
 */
export const getReservationById = async (id, identity) => {
  const where = {
    id,
    notes: "SIMKES", // Filter reservations from SIMKES application
  };

  // Add identity filter if provided
  if (identity) {
    where.identity = identity;
  }

  const reservation = await simrsPrisma.reservation.findFirst({
    where,
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Get QR code information if available
  try {
    const qrCode = await getQRCodeByReservationId(id);
    reservation.qrCodeUrl = qrCode.qrCodeUrl;
  } catch (error) {
    // QR code not found, continue without it
    reservation.qrCodeUrl = null;
  }

  return reservation;
};

/**
 * Cancel reservation
 * @param {string} id - Reservation ID
 * @param {string} cancelReason - Reason for cancellation
 * @param {string} identity - User identity for filtering
 * @returns {Promise<Object>} Cancelled reservation
 * @throws {ApiError} If reservation not found
 */
export const cancelReservation = async (id, cancelReason, identity) => {
  const where = {
    id,
    notes: "SIMKES", // Filter reservations from SIMKES application
  };

  // Add identity filter if provided
  if (identity) {
    where.identity = identity;
  }

  // Check if reservation exists
  const reservation = await simrsPrisma.reservation.findFirst({
    where,
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Check if reservation is already cancelled
  if (reservation.isCancelled) {
    throw new ApiError("Reservasi sudah dibatalkan sebelumnya", 400);
  }

  // Cancel reservation
  const cancelledReservation = await simrsPrisma.reservation.update({
    where: { id: reservation.id },
    data: {
      isCancelled: true,
      cancelReason: cancelReason,
    },
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  // Get QR code information if available
  try {
    const qrCode = await getQRCodeByReservationId(id);
    cancelledReservation.qrCodeUrl = qrCode.qrCodeUrl;
  } catch (error) {
    // QR code not found, continue without it
    cancelledReservation.qrCodeUrl = null;
  }

  return cancelledReservation;
};

/**
 * Delete reservation (permanent delete)
 * @param {string} id - Reservation ID
 * @param {string} identity - User identity for filtering
 * @returns {Promise<Object>} Deleted reservation
 * @throws {ApiError} If reservation not found or cannot be deleted
 */
export const deleteReservation = async (id, identity) => {
  const where = {
    id,
    notes: "SIMKES", // Filter reservations from SIMKES application
  };

  // Add identity filter if provided
  if (identity) {
    where.identity = identity;
  }

  // Check if reservation exists
  const reservation = await simrsPrisma.reservation.findFirst({
    where,
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Check if reservation can be deleted (isConfirmed must be false and callStatus must be "0")
  if (reservation.isConfirmed === true || reservation.callStatus !== "0") {
    throw new ApiError(
      "Reservasi tidak dapat dihapus karena sudah dikonfirmasi atau sudah dilayani",
      400
    );
  }

  // Try to get and delete QR code if exists
  try {
    const qrCode = await getQRCodeByReservationId(reservation.id);

    // Delete QR code file if exists
    if (qrCode && qrCode.filePath) {
      const fullPath = path.join("public", qrCode.filePath);
      try {
        await fs.access(fullPath);
        await fs.unlink(fullPath);
      } catch (fileError) {
        // File doesn't exist or cannot be accessed, continue with deletion
        console.error(`Error deleting QR code file: ${fileError.message}`);
      }
    }

    // Delete QR code record from database
    if (qrCode) {
      await deleteQRCode(qrCode.id);
    }
  } catch (error) {
    // QR code not found, continue with reservation deletion
    if (error.statusCode !== 404) {
      console.error(`Error handling QR code: ${error.message}`);
    }
  }

  // Permanently delete the reservation
  await simrsPrisma.reservation.delete({
    where: { id: reservation.id },
  });

  return true;
};

/**
 * Save reservation
 * @param {Object} data - Reservation data
 * @returns {Object} Created reservation
 */
export const createReservation = async (data, userIdentity) => {
  const patient = await simrsPrisma.patient.findFirst({
    where: {
      identity: userIdentity,
    },
  });

  // Check if reservation date is not before today
  const today = dayjs().startOf("day");
  const reservationDay = dayjs(data.reservationDate).startOf("day");

  // Check if patient already has a reservation on the same date
  const existingReservation = await simrsPrisma.reservation.findFirst({
    where: {
      identity: userIdentity,
      reservationDate: {
        gte: reservationDay.toDate(),
        lt: reservationDay.add(1, "day").toDate(),
      },
      isCancelled: false,
      notes: "SIMKES", // Filter reservations from SIMKES application
    },
  });

  // if (existingReservation) {
  //   throw new ApiError(
  //     "Anda sudah memiliki reservasi pada tanggal yang sama. Tidak dapat membuat reservasi baru pada tanggal tersebut.",
  //     400
  //   );
  // }

  if (reservationDay.isBefore(today)) {
    throw new ApiError("Tanggal reservasi tidak boleh sebelum hari ini", 400);
  }

  // Check if doctor is available on the selected date and time
  if (data.doctorId) {
    const dayName = getDayName(data.reservationDate);
    const reservationTime = dayjs(data.reservationDate).format("HH:mm:ss");

    const doctorSchedule = await simrsPrisma.doctorSchedule.findFirst({
      where: {
        doctorId: data.doctorId,
        unitId: data.unitId,
        days: {
          contains: dayName,
        },
        isEnabled: true,
      },
    });

    if (!doctorSchedule) {
      throw new ApiError("Jadwal Dokter tidak tersedia di Poli ini", 400);
    }

    // Check if reservation time is within doctor's schedule time range
    const startTime = dayjs(doctorSchedule.startTime).format("HH:mm:ss");
    const endTime = dayjs(doctorSchedule.endTime).format("HH:mm:ss");

    if (reservationTime < startTime || reservationTime > endTime) {
      throw new ApiError(
        `Waktu reservasi harus dalam rentang jadwal dokter: ${startTime} - ${endTime}`,
        400
      );
    }
  }

  // Check quota
  const reservationDate = dayjs(data.reservationDate).toDate();

  const reservationHour = dayjs(data.reservationDate).hour();
  const maxQuota = 50; // Default max quota per session

  // Determine if morning or afternoon based on reservation time
  const isMorningSession = reservationHour < 12;

  // Get current queue numbers
  const quota = await getQueueNumberOnline(data.doctorId, reservationDate);

  // Check if quota is full based on time of day
  if (!isMorningSession && quota.siang >= maxQuota) {
    throw new ApiError(
      "Mohon maaf kuota layanan online siang sudah penuh, silahkan coba di jadwal yang lain",
      400
    );
  } else if (isMorningSession && quota.pagi >= maxQuota) {
    throw new ApiError(
      "Mohon maaf kuota layanan online pagi sudah penuh, silahkan coba di jadwal yang lain",
      400
    );
  }

  // Check and get referral source
  if (data.referralSourceId) {
    const referralSource = await simrsPrisma.referralSource.findUnique({
      where: {
        id: data.referralSourceId,
      },
    });

    if (!referralSource) {
      throw new ApiError("Sumber rujukan tidak ditemukan", 404);
    }
  }

  // Get unit information
  const unit = await simrsPrisma.unit.findUnique({
    where: {
      id: data.unitId,
    },
  });

  if (!unit) {
    throw new ApiError("Poli tidak ditemukan", 404);
  }

  // Generate queue number
  const queueNumber = await getNextQueueNumber(data.doctorId, reservationDate);

  let queueType = "";

  // Get counter number from unit id with zero padding (3 digits)
  const counterNumber = String(unit.id).padStart(3, "0");

  if (data.paymentMethodId === 2) {
    // BPJS - assuming ID 2 is BPJS
    if (!isMorningSession) {
      queueType = `EB${counterNumber}`;
    } else {
      queueType = `EA${counterNumber}`;
    }
  } else {
    // Non-BPJS
    if (!isMorningSession) {
      queueType = `ED${counterNumber}`;
    } else {
      queueType = `EC${counterNumber}`;
    }
  }

  // Generate QR code
  const qrContent = `${queueType}-${String(queueNumber).padStart(4, "0")} | ${
    data.unitId
  } | ${reservationDate}`;

  const qrFilePath = await generateQr({
    content: qrContent,
    subFolder: path.join(
      "reservations",
      unit.unitName,
      dayjs(reservationDate).format("YYYY-MM-DD")
    ),
    filenamePrefix: `${queueType}-${String(queueNumber).padStart(4, "0")}-${
      patient.name
    }`,
  });
  const qrCodeUrl = `${process.env.HOST_URL}/${qrFilePath.replace(/\\/g, "/")}`;

  // Generate reservation ID once and use it consistently
  const reservationId = generateReservationId().replace(/-/g, "");

  // Save QR code information to simkes database
  const savedQRCode = await saveQRCode({
    reservationId,
    qrCodeUrl,
    qrCodeContent: qrContent,
    filePath: qrFilePath,
  });

  const reservationData = {
    id: reservationId,
    isEnabled: true,
    unitId: data.unitId,
    reservationNumber: `${dayjs().format("YYYYMMDD")}-${queueNumber}`,
    reservationDate: new Date(reservationDate),
    paymentMethodId: data.paymentMethodId,
    identity: patient.identity,
    bpjsNumber: data.bpjsNumber || null,
    otherInsuranceNumber: data.otherInsuranceNumber || null,
    referralNumber: data.referralNumber || null,
    referralSourceId: data.referralSourceId || null,
    doctorId: data.doctorId,
    queueNumber: queueNumber,
    queueType: queueType,
    notes: "SIMKES",
    isConfirmed: false,
    callStatus: "0",
    isCancelled: false,
  };

  const createdReservation = await simrsPrisma.reservation.create({
    data: reservationData,
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  // Tambahkan qrCodeUrl dari simkes ke response
  createdReservation.qrCodeUrl = savedQRCode.qrCodeUrl;

  // Emit socket event
  // const io = getIO();
  // io.emit("reservation:updated", {
  //   doctorId: createdReservation.doctorId,
  //   reservationDate: createdReservation.reservationDate,
  //   message: "New reservation created",
  //   queueNumber: createdReservation.queueType,
  // });

  return createdReservation;
};
