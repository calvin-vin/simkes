import { simkesPrisma, simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Membuat penilaian dokter
 * @param {Object} data - Data penilaian dokter
 * @param {string} userIdentity - Identity pengguna
 * @returns {Promise<Object>} Penilaian dokter yang dibuat
 */
export const createDoctorRating = async (data, userIdentity) => {
  // Cek apakah reservasi ada dan milik pasien yang bersangkutan
  const reservation = await simrsPrisma.reservation.findFirst({
    where: {
      id: data.reservationId,
      identity: userIdentity,
      isEnabled: true,
    },
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Cek apakah reservasi sudah selesai dipanggil (callStatus = "2")
  if (reservation.callStatus !== "2") {
    throw new ApiError(
      "Anda hanya dapat memberikan penilaian setelah selesai dilayani",
      400
    );
  }

  // Cek apakah sudah ada penilaian untuk reservasi ini
  const existingRating = await simkesPrisma.doctorRating.findUnique({
    where: {
      reservationId: data.reservationId,
    },
  });

  if (existingRating) {
    throw new ApiError(
      "Anda sudah memberikan penilaian untuk reservasi ini",
      400
    );
  }

  // Buat penilaian dokter
  const doctorRating = await simkesPrisma.doctorRating.create({
    data: {
      reservationId: data.reservationId,
      doctorId: data.doctorId,
      patientId: userIdentity,
      rating: data.rating,
      comment: data.comment,
    },
  });

  return doctorRating;
};

/**
 * Mendapatkan semua penilaian dokter
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Penilaian dokter dengan pagination
 */
export const getAllDoctorRatings = async (query) => {
  const {
    doctorId,
    patientId,
    rating,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {
    ...(doctorId ? { doctorId: Number(doctorId) } : {}),
    ...(patientId ? { patientId } : {}),
    ...(rating ? { rating: Number(rating) } : {}),
  };

  // Build orderBy
  const orderBy = {};
  if (sortBy && ["rating", "createdAt"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "desc";
  } else {
    orderBy["createdAt"] = "desc"; // default sort
  }

  // Execute queries in parallel
  const [doctorRatings, total] = await Promise.all([
    simkesPrisma.doctorRating.findMany({
      where: filters,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
    simkesPrisma.doctorRating.count({ where: filters }),
  ]);

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit);

  return {
    results: doctorRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages,
    },
  };
};

/**
 * Mendapatkan penilaian dokter berdasarkan ID
 * @param {string} id - ID penilaian
 * @returns {Promise<Object>} Penilaian dokter
 */
export const getDoctorRatingById = async (id) => {
  const doctorRating = await simkesPrisma.doctorRating.findUnique({
    where: { id },
  });

  if (!doctorRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return doctorRating;
};

/**
 * Mendapatkan penilaian dokter berdasarkan ID reservasi
 * @param {string} reservationId - ID reservasi
 * @returns {Promise<Object>} Penilaian dokter
 */
export const getDoctorRatingByReservationId = async (reservationId) => {
  const doctorRating = await simkesPrisma.doctorRating.findUnique({
    where: { reservationId },
  });

  if (!doctorRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return doctorRating;
};
