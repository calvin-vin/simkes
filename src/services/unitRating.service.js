import { simkesPrisma, simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Membuat penilaian unit
 * @param {Object} data - Data penilaian unit
 * @param {string} userIdentity - Identity pengguna
 * @returns {Promise<Object>} Penilaian unit yang dibuat
 */
export const createUnitRating = async (data, userIdentity) => {
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
  const existingRating = await simkesPrisma.unitRating.findUnique({
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

  // Buat penilaian unit
  const unitRating = await simkesPrisma.unitRating.create({
    data: {
      reservationId: data.reservationId,
      unitId: data.unitId,
      patientId: userIdentity,
      rating: data.rating,
      comment: data.comment,
    },
  });

  return unitRating;
};

/**
 * Mendapatkan semua penilaian unit
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Penilaian unit dengan pagination
 */
export const getAllUnitRatings = async (query) => {
  const {
    unitId,
    patientId,
    rating,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {
    ...(unitId ? { unitId: Number(unitId) } : {}),
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
  const [unitRatings, total] = await Promise.all([
    simkesPrisma.unitRating.findMany({
      where: filters,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
    simkesPrisma.unitRating.count({ where: filters }),
  ]);

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit);

  return {
    results: unitRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages,
    },
  };
};

/**
 * Mendapatkan penilaian unit berdasarkan ID
 * @param {string} id - ID penilaian
 * @returns {Promise<Object>} Penilaian unit
 */
export const getUnitRatingById = async (id) => {
  const unitRating = await simkesPrisma.unitRating.findUnique({
    where: { id },
  });

  if (!unitRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return unitRating;
};

/**
 * Mendapatkan penilaian unit berdasarkan ID reservasi
 * @param {string} reservationId - ID reservasi
 * @returns {Promise<Object>} Penilaian unit
 */
export const getUnitRatingByReservationId = async (reservationId) => {
  const unitRating = await simkesPrisma.unitRating.findUnique({
    where: { reservationId },
  });

  if (!unitRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return unitRating;
};

/**
 * Mendapatkan rata-rata rating unit berdasarkan ID unit
 * @param {number} unitId - ID unit
 * @returns {Promise<Object>} Rata-rata rating unit (0-5) dan total rating
 */
export const getAverageRatingByUnitId = async (unitId) => {
  const result = await simkesPrisma.unitRating.aggregate({
    where: { unitId: Number(unitId) },
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
  });

  // Jika tidak ada rating, kembalikan 0
  if (!result._count.rating || result._count.rating === 0) {
    return {
      averageRating: 0,
      totalRatings: 0
    };
  }

  return {
    averageRating: parseFloat(result._avg.rating.toFixed(1)),
    totalRatings: result._count.rating
  };
};