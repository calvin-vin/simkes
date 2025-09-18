import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { getAverageRatingByNurseId } from "./nurseRating.service.js";

/**
 * Get all nurse schedules with pagination, filtering and sorting
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Nurse schedules with pagination
 */
async function getAllNurseSchedules(query) {
  const {
    page = 1,
    limit = 10,
    nurseName,
    date,
    isActive,
    sortBy = "dayOfWeek",
    sortOrder = "asc",
  } = query;

  const skip = (page - 1) * limit;

  // Prepare filter
  const filter = {};
  const nurseFilter = {};

  if (nurseName) {
    nurseFilter.name = {
      contains: nurseName,
      mode: "insensitive",
    };
  }

  if (date) {
    // Convert date to day of week (0-6, where 0 is Sunday)
    const dayOfWeek = new Date(date).getDay();
    filter.dayOfWeek = dayOfWeek;
  }

  if (isActive) {
    filter.isActive = isActive === "true";
  }

  // Prepare sort
  const orderBy = {};
  orderBy[sortBy] = sortOrder;

  // Jika ada filter nama perawat, kita perlu menggunakan filter relasi
  let whereCondition = filter;
  if (nurseFilter.name) {
    whereCondition = {
      ...filter,
      nurse: {
        name: nurseFilter.name,
      },
    };
  }

  const [schedules, total] = await Promise.all([
    simkesPrisma.nurseSchedule.findMany({
      where: whereCondition,
      orderBy,
      skip,
      take: Number(limit),
      include: {
        nurse: {
          select: {
            id: true,
            name: true,
            speciality: true,
            photoUrl: true,
          },
        },
      },
    }),
    simkesPrisma.nurseSchedule.count({
      where: whereCondition,
    }),
  ]);

  // Filter out schedules where nurse doesn't match the filter
  const filteredSchedules = schedules.filter(
    (schedule) => schedule.nurse !== null
  );

  // Get ratings for each nurse
  const schedulesWithRatings = await Promise.all(
    filteredSchedules.map(async (schedule) => {
      const rating = await getAverageRatingByNurseId(schedule.nurse.id);
      return {
        ...schedule,
        nurse: {
          ...schedule.nurse,
          rating: {
            averageRating: rating.averageRating,
            totalRatings: rating.totalRatings,
          },
        },
      };
    })
  );

  return {
    results: schedulesWithRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
}

/**
 * Get nurse schedule by ID
 * @param {string} id - Nurse schedule ID
 * @returns {Promise<Object>} Nurse schedule
 * @throws {ApiError} If nurse schedule not found
 */
async function getNurseScheduleById(id) {
  const schedule = await simkesPrisma.nurseSchedule.findUnique({
    where: { id },
    include: {
      nurse: {
        select: {
          id: true,
          name: true,
          speciality: true,
          photoUrl: true,
        },
      },
    },
  });

  if (!schedule) {
    throw new ApiError("Jadwal perawat tidak ditemukan", 404);
  }

  const rating = await getAverageRatingByNurseId(schedule.nurse.id);

  return {
    ...schedule,
    nurse: {
      ...schedule.nurse,
      rating: {
        averageRating: rating.averageRating,
        totalRatings: rating.totalRatings,
      },
    },
  };
}

/**
 * Get nurse schedules by nurse ID
 * @param {string} nurseId - Nurse ID
 * @returns {Promise<Array>} Nurse schedules
 */
async function getNurseSchedulesByNurseId(nurseId) {
  const schedules = await simkesPrisma.nurseSchedule.findMany({
    where: { nurseId },
    orderBy: { dayOfWeek: "asc" },
  });

  return schedules;
}

/**
 * Create a new nurse schedule
 * @param {Object} data - Nurse schedule data
 * @returns {Promise<Object>} Created nurse schedule
 */
async function createNurseSchedule(data) {
  return simkesPrisma.nurseSchedule.create({
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
 * Update nurse schedule by ID
 * @param {string} id - Nurse schedule ID
 * @param {Object} data - Updated nurse schedule data
 * @returns {Promise<Object>} Updated nurse schedule
 * @throws {ApiError} If nurse schedule not found
 */
async function updateNurseSchedule(id, data) {
  // Verify schedule exists
  await getNurseScheduleById(id);

  return simkesPrisma.nurseSchedule.update({
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
 * Delete nurse schedule by ID
 * @param {string} id - Nurse schedule ID
 * @returns {Promise<Object>} Deleted nurse schedule
 * @throws {ApiError} If nurse schedule not found
 */
async function deleteNurseSchedule(id) {
  // Verify schedule exists
  await getNurseScheduleById(id);

  return simkesPrisma.nurseSchedule.delete({
    where: { id },
  });
}

const nurseScheduleService = {
  getAllNurseSchedules,
  getNurseScheduleById,
  getNurseSchedulesByNurseId,
  createNurseSchedule,
  updateNurseSchedule,
  deleteNurseSchedule,
};

export default nurseScheduleService;
