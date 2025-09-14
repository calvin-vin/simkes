import { simkesPrisma, simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Membuat penilaian fasilitas
 * @param {Object} data - Data penilaian fasilitas
 * @param {string} userIdentity - Identity pengguna
 * @returns {Promise<Object>} Penilaian fasilitas yang dibuat
 */
export const createFacilityRating = async (data, userIdentity) => {
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
  const existingRating = await simkesPrisma.facilityRating.findUnique({
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

  // Cek apakah fasilitas ada
  const facility = await simkesPrisma.facility.findUnique({
    where: {
      id: data.facilityId,
      isActive: true,
    },
  });

  if (!facility) {
    throw new ApiError("Fasilitas tidak ditemukan", 404);
  }

  // Buat penilaian fasilitas
  const facilityRating = await simkesPrisma.facilityRating.create({
    data: {
      reservationId: data.reservationId,
      facilityId: data.facilityId,
      patientId: userIdentity,
      rating: data.rating,
      comment: data.comment,
    },
  });

  return facilityRating;
};

/**
 * Mendapatkan semua penilaian fasilitas
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Penilaian fasilitas dengan pagination
 */
export const getAllFacilityRatings = async (query) => {
  const {
    facilityId,
    patientId,
    rating,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {
    ...(facilityId ? { facilityId } : {}),
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
  const [facilityRatings, total] = await Promise.all([
    simkesPrisma.facilityRating.findMany({
      where: filters,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
    simkesPrisma.facilityRating.count({ where: filters }),
  ]);

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit);

  return {
    results: facilityRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages,
    },
  };
};

/**
 * Mendapatkan penilaian fasilitas berdasarkan ID
 * @param {string} id - ID penilaian
 * @returns {Promise<Object>} Penilaian fasilitas
 */
export const getFacilityRatingById = async (id) => {
  const facilityRating = await simkesPrisma.facilityRating.findUnique({
    where: { id },
  });

  if (!facilityRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return facilityRating;
};

/**
 * Mendapatkan penilaian fasilitas berdasarkan ID reservasi
 * @param {string} reservationId - ID reservasi
 * @returns {Promise<Object>} Penilaian fasilitas
 */
export const getFacilityRatingByReservationId = async (reservationId) => {
  const facilityRating = await simkesPrisma.facilityRating.findUnique({
    where: { reservationId },
  });

  if (!facilityRating) {
    throw new ApiError("Penilaian tidak ditemukan", 404);
  }

  return facilityRating;
};

/**
 * Mendapatkan rata-rata rating fasilitas berdasarkan ID fasilitas
 * @param {string} facilityId - ID fasilitas
 * @returns {Promise<Object>} Rata-rata rating fasilitas (0-5) dan total rating
 */
export const getAverageRatingByFacilityId = async (facilityId) => {
  const result = await simkesPrisma.facilityRating.aggregate({
    where: { facilityId },
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
      facilityId,
      averageRating: 0,
      totalRatings: 0
    };
  }

  return {
    facilityId,
    averageRating: parseFloat(result._avg.rating.toFixed(1)),
    totalRatings: result._count.rating
  };
};