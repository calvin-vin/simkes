import path from "path";
import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { saveFile } from "../utils/saveFile.js";
import fs from "fs/promises";
import { getAverageRatingByNurseId } from "./nurseRating.service.js";

async function getAllActiveNurses(query) {
  const {
    page = 1,
    limit = 10,
    search,
    speciality,
    sortBy = "createdAt",
    sortOrder = "desc",
    minRating,
    maxRating,
  } = query;

  const skip = (page - 1) * limit;

  // Prepare filter
  const filter = {
    isActive: true,
  };

  if (search) {
    filter.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  if (speciality) {
    filter.speciality = {
      contains: speciality,
      mode: "insensitive",
    };
  }

  // Prepare sort
  const orderBy = {};
  orderBy[sortBy] = sortOrder;

  // If rating filter is applied, we need to fetch all nurses and filter manually
  if (minRating !== undefined || maxRating !== undefined) {
    // Fetch all nurses that match the filter
    const allNurses = await simkesPrisma.nurse.findMany({
      where: filter,
      orderBy,
    });

    // Get ratings for all nurses
    const nursesWithRatings = await Promise.all(
      allNurses.map(async (nurse) => {
        const rating = await getAverageRatingByNurseId(nurse.id);
        return {
          ...nurse,
          averageRating: rating.averageRating,
          totalRatings: rating.totalRatings,
        };
      })
    );

    // Filter by rating
    let filteredNurses = nursesWithRatings;
    if (minRating !== undefined) {
      filteredNurses = filteredNurses.filter(
        (nurse) => nurse.averageRating >= minRating || nurse.totalRatings === 0
      );
    }
    if (maxRating !== undefined) {
      filteredNurses = filteredNurses.filter(
        (nurse) => nurse.averageRating <= maxRating || nurse.totalRatings === 0
      );
    }

    // Apply pagination manually
    const paginatedNurses = filteredNurses.slice(skip, skip + limit);
    const total = filteredNurses.length;

    return {
      results: paginatedNurses,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // If no rating filter, use Prisma's pagination
  const [nurses, total] = await Promise.all([
    simkesPrisma.nurse.findMany({
      where: filter,
      orderBy,
      skip,
      take: Number(limit),
    }),
    simkesPrisma.nurse.count({ where: filter }),
  ]);

  // Get ratings for each nurse
  const nursesWithRatings = await Promise.all(
    nurses.map(async (nurse) => {
      const rating = await getAverageRatingByNurseId(nurse.id);
      return {
        ...nurse,
        averageRating: rating.averageRating,
        totalRatings: rating.totalRatings,
      };
    })
  );

  return {
    results: nursesWithRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
}

async function getActiveNurseById(id) {
  const nurse = await simkesPrisma.nurse.findUnique({
    where: { id, isActive: true },
  });

  if (!nurse) {
    throw new ApiError("Perawat tidak ditemukan", 404);
  }

  const rating = await getAverageRatingByNurseId(id);

  return {
    ...nurse,
    averageRating: rating.averageRating,
    totalRatings: rating.totalRatings,
  };
}

/**
 * Get all nurses with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Nurses with pagination
 */
async function getAllNurses(query) {
  const {
    page = 1,
    limit = 10,
    search,
    speciality,
    isActive,
    sortBy = "createdAt",
    sortOrder = "desc",
    minRating,
    maxRating,
  } = query;

  const skip = (page - 1) * limit;

  // Prepare filter
  const filter = {};

  if (search) {
    filter.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  if (speciality) {
    filter.speciality = {
      contains: speciality,
      mode: "insensitive",
    };
  }

  if (isActive !== undefined) {
    filter.isActive = isActive === "true";
  }

  // Prepare sort
  const orderBy = {};
  orderBy[sortBy] = sortOrder;

  // If rating filter is applied, we need to fetch all nurses and filter manually
  if (minRating !== undefined || maxRating !== undefined) {
    // Fetch all nurses that match the filter
    const allNurses = await simkesPrisma.nurse.findMany({
      where: filter,
      orderBy,
    });

    // Get ratings for all nurses
    const nursesWithRatings = await Promise.all(
      allNurses.map(async (nurse) => {
        const rating = await getAverageRatingByNurseId(nurse.id);
        return {
          ...nurse,
          averageRating: rating.averageRating,
          totalRatings: rating.totalRatings,
        };
      })
    );

    // Filter by rating
    let filteredNurses = nursesWithRatings;
    if (minRating !== undefined) {
      filteredNurses = filteredNurses.filter(
        (nurse) => nurse.averageRating >= minRating || nurse.totalRatings === 0
      );
    }
    if (maxRating !== undefined) {
      filteredNurses = filteredNurses.filter(
        (nurse) => nurse.averageRating <= maxRating || nurse.totalRatings === 0
      );
    }

    // Apply pagination manually
    const paginatedNurses = filteredNurses.slice(skip, skip + limit);
    const total = filteredNurses.length;

    return {
      results: paginatedNurses,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // If no rating filter, use Prisma's pagination
  const [nurses, total] = await Promise.all([
    simkesPrisma.nurse.findMany({
      where: filter,
      orderBy,
      skip,
      take: Number(limit),
    }),
    simkesPrisma.nurse.count({ where: filter }),
  ]);

  // Get ratings for each nurse
  const nursesWithRatings = await Promise.all(
    nurses.map(async (nurse) => {
      const rating = await getAverageRatingByNurseId(nurse.id);
      return {
        ...nurse,
        averageRating: rating.averageRating,
        totalRatings: rating.totalRatings,
      };
    })
  );

  return {
    results: nursesWithRatings,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
}

/**
 * Get nurse by ID
 * @param {string} id - Nurse ID
 * @returns {Promise<Object>} Nurse
 * @throws {ApiError} If nurse not found
 */
async function getNurseById(id) {
  const nurse = await simkesPrisma.nurse.findUnique({
    where: { id },
  });

  if (!nurse) {
    throw new ApiError("Perawat tidak ditemukan", 404);
  }

  const rating = await getAverageRatingByNurseId(id);

  return {
    ...nurse,
    averageRating: rating.averageRating,
    totalRatings: rating.totalRatings,
  };
}

/**
 * Create a new nurse
 * @param {Object} data - Nurse data
 * @param {Object} photoFile - Uploaded photo file
 * @returns {Promise<Object>} Created nurse
 */
async function createNurse(data, photoFile = null) {
  let photoUrl = null;

  // Jika ada file foto yang diunggah, simpan file dan dapatkan URL-nya
  if (photoFile) {
    // Save photo file
    const savedFilePath = await saveFile({
      buffer: photoFile.buffer,
      baseFolder: "public",
      subFolder: "nurses",
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL for photo
    photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(/\\/g, "/")}`;
  }

  // Konversi isActive dari string ke boolean jika ada
  const nurseData = {
    ...data,
    photoUrl,
  };

  // Jika isActive ada dan berupa string, konversi ke boolean
  if (nurseData.isActive !== undefined) {
    nurseData.isActive =
      nurseData.isActive === "true" || nurseData.isActive === true;
  }

  return simkesPrisma.nurse.create({
    data: nurseData,
  });
}

/**
 * Update nurse by ID
 * @param {string} id - Nurse ID
 * @param {Object} data - Updated nurse data
 * @param {Object} photoFile - Uploaded photo file
 * @returns {Promise<Object>} Updated nurse
 * @throws {ApiError} If nurse not found
 */
async function updateNurse(id, data, photoFile = null) {
  // Check if nurse exists
  const nurse = await getNurseById(id);

  // Jika ada file foto baru yang diunggah
  if (photoFile) {
    // Hapus foto lama jika ada
    if (nurse.photoUrl) {
      const relativePath = nurse.photoUrl.replace(
        `${process.env.HOST_URL}/`,
        ""
      );
      const oldFilePath = path.join("public", relativePath);

      try {
        await fs.unlink(oldFilePath);
      } catch (error) {
        console.error(`Error deleting old file ${oldFilePath}:`, error);
        // Continue with update even if file deletion fails
      }
    }

    // Save new photo file
    const savedFilePath = await saveFile({
      buffer: photoFile.buffer,
      baseFolder: "public",
      subFolder: "nurses",
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL for photo
    data.photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  // Konversi isActive dari string ke boolean jika ada
  if (data.isActive !== undefined) {
    data.isActive = data.isActive === "true" || data.isActive === true;
  }

  return simkesPrisma.nurse.update({
    where: { id },
    data,
  });
}

/**
 * Delete nurse by ID
 * @param {string} id - Nurse ID
 * @returns {Promise<Object>} Deleted nurse
 * @throws {ApiError} If nurse not found
 */
async function deleteNurse(id) {
  // Check if nurse exists
  const nurse = await getNurseById(id);

  // Hapus file foto jika ada
  if (nurse.photoUrl) {
    const relativePath = nurse.photoUrl.replace(`${process.env.HOST_URL}/`, "");
    const filePath = path.join("public", relativePath);

    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error);
      // Continue with database deletion even if file deletion fails
    }
  }

  return simkesPrisma.nurse.delete({
    where: { id },
  });
}

const nurseService = {
  getAllActiveNurses,
  getActiveNurseById,
  getAllNurses,
  getNurseById,
  createNurse,
  updateNurse,
  deleteNurse,
};

export default nurseService;
