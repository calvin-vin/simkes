import path from "path";
import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { saveFile } from "../utils/saveFile.js";
import fs from "fs/promises";
import { getAverageRatingByFacilityId } from "./facilityRating.service.js";

/**
 * Get facility statistics
 * @returns {Promise<Object>} Facility statistics
 */
export const getFacilityStatistics = async () => {
  const [totalFacilities, activeFacilities, inactiveFacilities, totalPhotos] =
    await Promise.all([
      simkesPrisma.facility.count(),
      simkesPrisma.facility.count({ where: { isActive: true } }),
      simkesPrisma.facility.count({ where: { isActive: false } }),
      simkesPrisma.facilityPhoto.count(),
    ]);

  return {
    totalFacilities,
    activeFacilities,
    inactiveFacilities,
    totalPhotos,
    activeFacilitiesPercentage:
      totalFacilities > 0
        ? Math.round((activeFacilities / totalFacilities) * 100)
        : 0,
    inactiveFacilitiesPercentage:
      totalFacilities > 0
        ? Math.round((inactiveFacilities / totalFacilities) * 100)
        : 0,
  };
};

/**
 * Get all facilities with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Facilities with pagination
 */
export const getAllPublicFacilities = async (query) => {
  const {
    page = 1,
    limit = 10,
    search,
    sortBy = "createdAt",
    sortOrder = "desc",
    minRating,
    maxRating,
  } = query;

  // Build filters
  const filters = {
    isActive: true,
  };

  if (search) {
    filters.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  // Build sort
  const orderBy = {
    [sortBy]: sortOrder,
  };

  // Jika ada filter rating, kita perlu mengambil semua data terlebih dahulu
  const hasRatingFilter = minRating !== undefined || maxRating !== undefined;

  if (!hasRatingFilter) {
    // Jika tidak ada filter rating, gunakan paginasi database normal
    const [facilities, total] = await Promise.all([
      simkesPrisma.facility.findMany({
        where: filters,
        include: {
          photos: true,
        },
        skip: (page - 1) * Number(limit),
        take: Number(limit),
        orderBy,
      }),
      simkesPrisma.facility.count({ where: filters }),
    ]);

    // Ambil rating untuk setiap fasilitas
    const facilitiesWithRating = await Promise.all(
      facilities.map(async (facility) => {
        const { averageRating, totalRatings } =
          await getAverageRatingByFacilityId(facility.id);
        return {
          ...facility,
          averageRating,
          totalRatings,
        };
      })
    );

    return {
      results: facilitiesWithRating,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    };
  } else {
    // Jika ada filter rating, ambil semua data terlebih dahulu
    const allFacilities = await simkesPrisma.facility.findMany({
      where: filters,
      include: {
        photos: true,
      },
      orderBy,
    });

    // Ambil rating untuk semua fasilitas
    const allFacilitiesWithRating = await Promise.all(
      allFacilities.map(async (facility) => {
        const { averageRating, totalRatings } =
          await getAverageRatingByFacilityId(facility.id);
        return {
          ...facility,
          averageRating,
          totalRatings,
        };
      })
    );

    // Filter berdasarkan rating
    let filteredFacilities = allFacilitiesWithRating;
    if (minRating !== undefined) {
      filteredFacilities = filteredFacilities.filter(
        (facility) => facility.averageRating >= Number(minRating)
      );
    }
    if (maxRating !== undefined) {
      filteredFacilities = filteredFacilities.filter(
        (facility) => facility.averageRating <= Number(maxRating)
      );
    }

    // Hitung total setelah filter
    const filteredTotal = filteredFacilities.length;

    // Terapkan paginasi secara manual
    const startIndex = (page - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedFacilities = filteredFacilities.slice(startIndex, endIndex);

    return {
      results: paginatedFacilities,
      pagination: {
        total: filteredTotal,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(filteredTotal / Number(limit)),
      },
    };
  }
};

/**
 * Get facility by ID
 * @param {string} id - Facility ID
 * @returns {Promise<Object>} Facility
 * @throws {ApiError} If facility not found
 */
export const getPublicFacilityById = async (id) => {
  const facility = await simkesPrisma.facility.findUnique({
    where: { id, isActive: true },
    include: {
      photos: true,
    },
  });

  if (!facility) {
    throw new ApiError("Fasilitas tidak ditemukan", 404);
  }

  // Ambil rating untuk fasilitas
  const { averageRating, totalRatings } = await getAverageRatingByFacilityId(
    facility.id
  );

  return {
    ...facility,
    averageRating,
    totalRatings,
  };
};

/**
 * Get all facilities with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Facilities with pagination
 */
export const getAllFacilities = async (query) => {
  const {
    page = 1,
    limit = 10,
    search,
    isActive,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {};

  if (search) {
    filters.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  if (isActive) {
    filters.isActive = isActive === "true";
  }

  // Build sort
  const orderBy = {
    [sortBy]: sortOrder,
  };

  // Get facilities with pagination
  const [facilities, total] = await Promise.all([
    simkesPrisma.facility.findMany({
      where: filters,
      include: {
        photos: true,
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.facility.count({ where: filters }),
  ]);

  return {
    results: facilities,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Get facility by ID
 * @param {string} id - Facility ID
 * @returns {Promise<Object>} Facility
 * @throws {ApiError} If facility not found
 */
export const getFacilityById = async (id) => {
  const facility = await simkesPrisma.facility.findUnique({
    where: { id },
    include: {
      photos: true,
    },
  });

  if (!facility) {
    throw new ApiError("Fasilitas tidak ditemukan", 404);
  }

  return facility;
};

/**
 * Create a new facility
 * @param {Object} data - Facility data
 * @returns {Promise<Object>} Created facility
 */
export const createFacility = async (data) => {
  const { name, description, isActive } = data;

  return simkesPrisma.facility.create({
    data: {
      name,
      description,
      isActive: isActive !== undefined ? isActive : true,
    },
    include: {
      photos: true,
    },
  });
};

/**
 * Update facility by ID
 * @param {string} id - Facility ID
 * @param {Object} data - Facility data to update
 * @returns {Promise<Object>} Updated facility
 * @throws {ApiError} If facility not found
 */
export const updateFacility = async (id, data) => {
  const facility = await getFacilityById(id);

  return simkesPrisma.facility.update({
    where: { id },
    data,
    include: {
      photos: true,
    },
  });
};

/**
 * Delete facility by ID
 * @param {string} id - Facility ID
 * @returns {Promise<Object>} Deleted facility
 * @throws {ApiError} If facility not found
 */
export const deleteFacility = async (id) => {
  const facility = await getFacilityById(id);

  return simkesPrisma.facility.delete({
    where: { id },
  });
};

/**
 * Add photo to facility
 * @param {string} facilityId - Facility ID
 * @param {Object} photoFile - Photo file from multer
 * @returns {Promise<Object>} Created facility photo
 * @throws {ApiError} If facility not found
 */
export const addFacilityPhoto = async (facilityId, photoFile) => {
  // Validate photo file
  if (!photoFile) {
    throw new ApiError("File foto tidak ditemukan", 400);
  }

  // Check if facility exists
  const facility = await getFacilityById(facilityId);

  // Save photo file
  const savedFilePath = await saveFile({
    buffer: photoFile.buffer,
    baseFolder: "public",
    subFolder: path.join("facilities"),
    extension: path.extname(photoFile.originalname),
  });

  // Generate full URL for photo
  const photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
    /\\/g,
    "/"
  )}`;

  // Create photo record
  return simkesPrisma.facilityPhoto.create({
    data: {
      facilityId,
      photoUrl,
    },
  });
};

/**
 * Delete facility photo
 * @param {string} photoId - Photo ID
 * @returns {Promise<Object>} Deleted photo
 * @throws {ApiError} If photo not found
 */
export const deleteFacilityPhoto = async (photoId) => {
  const photo = await simkesPrisma.facilityPhoto.findUnique({
    where: { id: photoId },
  });

  if (!photo) {
    throw new ApiError("Foto fasilitas tidak ditemukan", 404);
  }

  // Extract file path from URL
  const photoUrl = photo.photoUrl;
  const relativePath = photoUrl.replace(`${process.env.HOST_URL}/`, "");
  const filePath = path.join("public", relativePath);

  try {
    // Delete file from filesystem
    await fs.unlink(filePath);
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
    // Continue with database deletion even if file deletion fails
  }

  // Delete record from database
  return simkesPrisma.facilityPhoto.delete({
    where: { id: photoId },
  });
};

export const facilityService = {
  getAllFacilities,
  getFacilityById,
  createFacility,
  updateFacility,
  deleteFacility,
  addFacilityPhoto,
  deleteFacilityPhoto,
  getAllPublicFacilities,
  getPublicFacilityById,
};
