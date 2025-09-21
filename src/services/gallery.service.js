import path from "path";
import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { saveFile } from "../utils/saveFile.js";
import fs from "fs/promises";

/**
 * Get gallery statistics for dashboard
 * @returns {Promise<Object>} Gallery statistics
 */
export const getGalleryStats = async () => {
  // Get total galleries
  const totalGalleries = await simkesPrisma.gallery.count();

  // Get active galleries
  const activeGalleries = await simkesPrisma.gallery.count({
    where: {
      isActive: true,
    },
  });

  // Get inactive galleries
  const inactiveGalleries = await simkesPrisma.gallery.count({
    where: {
      isActive: false,
    },
  });

  // Get total photos
  const totalPhotos = await simkesPrisma.galleryPhoto.count();

  return {
    totalGalleries,
    activeGalleries,
    inactiveGalleries,
    totalPhotos,
    activeGalleriesPercentage:
      totalGalleries > 0
        ? Math.round((activeGalleries / totalGalleries) * 100)
        : 0,
    inactiveGalleriesPercentage:
      totalGalleries > 0
        ? Math.round((inactiveGalleries / totalGalleries) * 100)
        : 0,
  };
};

/**
 * Get all active galleries with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Galleries with pagination
 */
export const getAllActiveGalleries = async (query) => {
  const {
    page = 1,
    limit = 10,
    search,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {
    isActive: true,
  };

  if (search) {
    filters.title = {
      contains: search,
      mode: "insensitive",
    };
  }

  // Build sort
  const orderBy = {
    [sortBy]: sortOrder,
  };

  // Get galleries with pagination
  const [galleries, total] = await Promise.all([
    simkesPrisma.gallery.findMany({
      where: filters,
      include: {
        photos: true,
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.gallery.count({ where: filters }),
  ]);

  return {
    results: galleries,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Get active gallery by ID
 * @param {string} id - Gallery ID
 * @returns {Promise<Object>} Gallery
 * @throws {ApiError} If gallery not found
 */
export const getActiveGalleryById = async (id) => {
  const gallery = await simkesPrisma.gallery.findUnique({
    where: { id, isActive: true },
    include: {
      photos: true,
    },
  });

  if (!gallery) {
    throw new ApiError("Gallery tidak ditemukan", 404);
  }

  return gallery;
};

/**
 * Get all galleries with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Galleries with pagination
 */
export const getAllGalleries = async (query) => {
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
    filters.title = {
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

  // Get galleries with pagination
  const [galleries, total] = await Promise.all([
    simkesPrisma.gallery.findMany({
      where: filters,
      include: {
        photos: true,
      },
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.gallery.count({ where: filters }),
  ]);

  return {
    results: galleries,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Get gallery by ID
 * @param {string} id - Gallery ID
 * @returns {Promise<Object>} Gallery
 * @throws {ApiError} If gallery not found
 */
export const getGalleryById = async (id) => {
  const gallery = await simkesPrisma.gallery.findUnique({
    where: { id },
    include: {
      photos: true,
    },
  });

  if (!gallery) {
    throw new ApiError("Gallery tidak ditemukan", 404);
  }

  return gallery;
};

/**
 * Create a new gallery
 * @param {Object} data - Gallery data
 * @returns {Promise<Object>} Created gallery
 */
export const createGallery = async (data) => {
  const { title, description, isActive } = data;

  return simkesPrisma.gallery.create({
    data: {
      title,
      description,
      isActive: isActive !== undefined ? isActive : true,
    },
    include: {
      photos: true,
    },
  });
};

/**
 * Update gallery by ID
 * @param {string} id - Gallery ID
 * @param {Object} data - Gallery data to update
 * @returns {Promise<Object>} Updated gallery
 * @throws {ApiError} If gallery not found
 */
export const updateGallery = async (id, data) => {
  const gallery = await getGalleryById(id);

  return simkesPrisma.gallery.update({
    where: { id },
    data,
    include: {
      photos: true,
    },
  });
};

/**
 * Delete gallery by ID
 * @param {string} id - Gallery ID
 * @returns {Promise<Object>} Deleted gallery
 * @throws {ApiError} If gallery not found
 */
export const deleteGallery = async (id) => {
  const gallery = await getGalleryById(id);

  // Get all photos to delete files
  const photos = await simkesPrisma.galleryPhoto.findMany({
    where: { galleryId: id },
  });

  // Delete photo files from filesystem
  for (const photo of photos) {
    try {
      const photoUrl = photo.photoUrl;
      const relativePath = photoUrl.replace(`${process.env.HOST_URL}/`, "");
      const filePath = path.join("public", relativePath);
      await fs.unlink(filePath);
    } catch (error) {
      console.error(`Error deleting file:`, error);
      // Continue with database deletion even if file deletion fails
    }
  }

  return simkesPrisma.gallery.delete({
    where: { id },
  });
};

/**
 * Add photo to gallery
 * @param {string} galleryId - Gallery ID
 * @param {Object} photoFile - Photo file from multer
 * @returns {Promise<Object>} Created gallery photo
 * @throws {ApiError} If gallery not found
 */
export const addGalleryPhoto = async (galleryId, photoFile) => {
  // Validate photo file
  if (!photoFile) {
    throw new ApiError("File foto tidak ditemukan", 400);
  }

  // Check if gallery exists
  const gallery = await getGalleryById(galleryId);

  // Save photo file
  const savedFilePath = await saveFile({
    buffer: photoFile.buffer,
    baseFolder: "public",
    subFolder: path.join("galleries"),
    extension: path.extname(photoFile.originalname),
  });

  // Generate full URL for photo
  const photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
    /\\/g,
    "/"
  )}`;

  // Create photo record
  return simkesPrisma.galleryPhoto.create({
    data: {
      galleryId,
      photoUrl,
    },
  });
};

/**
 * Delete gallery photo
 * @param {string} photoId - Photo ID
 * @returns {Promise<Object>} Deleted photo
 * @throws {ApiError} If photo not found
 */
export const deleteGalleryPhoto = async (photoId) => {
  const photo = await simkesPrisma.galleryPhoto.findUnique({
    where: { id: photoId },
  });

  if (!photo) {
    throw new ApiError("Foto gallery tidak ditemukan", 404);
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
  return simkesPrisma.galleryPhoto.delete({
    where: { id: photoId },
  });
};

export const galleryService = {
  getAllActiveGalleries,
  getActiveGalleryById,
  getAllGalleries,
  getGalleryById,
  getGalleryStats,
  createGallery,
  updateGallery,
  deleteGallery,
  addGalleryPhoto,
  deleteGalleryPhoto,
};
