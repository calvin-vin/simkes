import { simkesPrisma, simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Membuat penilaian perawat
 * @param {Object} data - Data penilaian perawat
 * @param {string} userIdentity - Identity pengguna
 * @returns {Promise<Object>} Penilaian perawat yang dibuat
 */
export const createNurseRating = async (data, userIdentity) => {
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

  // Cek apakah sudah ada penilaian untuk perawat ini pada reservasi ini
  const existingRating = await simkesPrisma.nurseRating.findFirst({
    where: {
      reservationId: data.reservationId,
      nurseId: data.nurseId,
    },
  });

  if (existingRating) {
    throw new ApiError(
      "Anda sudah memberikan penilaian untuk perawat ini pada reservasi ini",
      400
    );
  }

  // Cek apakah perawat ada
  const nurse = await simkesPrisma.nurse.findUnique({
    where: {
      id: data.nurseId,
      isActive: true,
    },
  });

  if (!nurse) {
    throw new ApiError("Perawat tidak ditemukan", 404);
  }

  // Buat penilaian perawat
  const nurseRating = await simkesPrisma.nurseRating.create({
    data: {
      reservationId: data.reservationId,
      nurseId: data.nurseId,
      patientId: userIdentity,
      rating: data.rating,
      comment: data.comment,
    },
  });

  return nurseRating;
};

/**
 * Mendapatkan semua penilaian perawat
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Penilaian perawat dengan pagination
 */
export const getAllNurseRatings = async (query) => {
  const {
    nurseId,
    patientId,
    rating,
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {
    ...(nurseId ? { nurseId } : {}),
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
  const [nurseRatings, total] = await Promise.all([
    simkesPrisma.nurseRating.findMany({
      where: filters,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
      include: {
        nurse: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),
    simkesPrisma.nurseRating.count({ where: filters }),
  ]);

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit);

  return {
    results: nurseRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages,
    },
  };
};

/**
 * Mendapatkan penilaian perawat berdasarkan ID
 * @param {string} id - ID penilaian
 * @returns {Promise<Object>} Penilaian perawat
 */
export const getNurseRatingById = async (id) => {
  const nurseRating = await simkesPrisma.nurseRating.findUnique({
    where: { id },
    include: {
      nurse: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!nurseRating) {
    throw new ApiError("Penilaian perawat tidak ditemukan", 404);
  }

  return nurseRating;
};

/**
 * Mendapatkan penilaian perawat berdasarkan ID reservasi
 * @param {string} reservationId - ID reservasi
 * @returns {Promise<Array>} Daftar penilaian perawat
 */
export const getNurseRatingByReservationId = async (reservationId) => {
  const nurseRatings = await simkesPrisma.nurseRating.findMany({
    where: { reservationId },
    include: {
      nurse: true,
    },
  });

  if (nurseRatings.length === 0) {
    throw new ApiError("Penilaian perawat tidak ditemukan", 404);
  }

  return nurseRatings;
};

/**
 * Get average rating by nurse ID
 * @param {string} nurseId - Nurse ID
 * @returns {Promise<Object>} Average rating and total ratings
 */
export async function getAverageRatingByNurseId(nurseId) {
  const result = await simkesPrisma.nurseRating.aggregate({
    where: {
      nurseId,
    },
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
  });

  return {
    averageRating: result._avg.rating || 0,
    totalRatings: result._count.rating || 0,
  };
}

/**
 * Update nurse rating by ID
 * @param {string} id - Nurse rating ID
 * @param {Object} data - Updated nurse rating data
 * @returns {Promise<Object>} Updated nurse rating
 * @throws {ApiError} If nurse rating not found
 */
export async function updateNurseRating(id, data) {
  // Verify rating exists
  await getNurseRatingById(id);

  return simkesPrisma.nurseRating.update({
    where: { id },
    data,
    include: {
      nurse: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

/**
 * Delete nurse rating by ID
 * @param {string} id - Nurse rating ID
 * @returns {Promise<Object>} Deleted nurse rating
 * @throws {ApiError} If nurse rating not found
 */
export async function deleteNurseRating(id) {
  // Verify rating exists
  await getNurseRatingById(id);

  return simkesPrisma.nurseRating.delete({
    where: { id },
  });
}
