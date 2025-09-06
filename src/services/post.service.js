import path from "path";
import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { saveFile } from "../utils/saveFile.js";
import fs from "fs/promises";

/**
 * Get all posts with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Posts with pagination
 */
export const getAllPublicPosts = async (query) => {
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
    filters.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  // Build sort
  const orderBy = {
    [sortBy]: sortOrder,
  };

  // Get posts with pagination
  const [posts, total] = await Promise.all([
    simkesPrisma.post.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.post.count({ where: filters }),
  ]);

  return {
    results: posts,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Get post by ID
 * @param {string} id - Post ID
 * @returns {Promise<Object>} Post
 * @throws {ApiError} If post not found
 */
export const getPublicPostById = async (id) => {
  const post = await simkesPrisma.post.findUnique({
    where: { id, isActive: true },
  });

  if (!post) {
    throw new ApiError("Postingan tidak ditemukan", 404);
  }

  return post;
};

/**
 * Get all posts with pagination and filtering
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Posts with pagination
 */
export const getAllPosts = async (query) => {
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
    filters.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (isActive) {
    filters.isActive = isActive === "true";
  }

  // Build sort
  const orderBy = {
    [sortBy]: sortOrder,
  };

  // Get posts with pagination
  const [posts, total] = await Promise.all([
    simkesPrisma.post.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.post.count({ where: filters }),
  ]);

  return {
    results: posts,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Get post by ID
 * @param {string} id - Post ID
 * @returns {Promise<Object>} Post
 * @throws {ApiError} If post not found
 */
export const getPostById = async (id) => {
  const post = await simkesPrisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    throw new ApiError("Postingan tidak ditemukan", 404);
  }

  return post;
};

/**
 * Create a new post
 * @param {Object} data - Post data
 * @returns {Promise<Object>} Created post
 */
export const createPost = async (data, photoFile = null, authorData) => {
  const { title, content, isActive } = data;
  let finalPhotoUrl = null;

  // Jika ada file foto yang diunggah, simpan file dan dapatkan URL-nya
  if (photoFile) {
    // Save photo file
    const savedFilePath = await saveFile({
      buffer: photoFile.buffer,
      baseFolder: "public",
      subFolder: "posts",
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL for photo
    finalPhotoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  const authorId = authorData.id;
  const authorName = authorData.profile?.name || "Anonymous";

  return simkesPrisma.post.create({
    data: {
      title,
      content,
      authorId,
      authorName,
      photoUrl: finalPhotoUrl,
      isActive: isActive === "true",
    },
  });
};

/**
 * Update post
 * @param {string} id - Post ID
 * @param {Object} data - Post data
 * @returns {Promise<Object>} Updated post
 * @throws {ApiError} If post not found
 */
export const updatePost = async (id, data, photoFile = null) => {
  // Check if post exists
  const post = await getPostById(id);

  // Jika ada file foto baru yang diunggah
  if (photoFile) {
    // Hapus foto lama jika ada
    if (post.photoUrl) {
      const relativePath = post.photoUrl.replace(
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
      subFolder: "posts",
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL for photo
    data.photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  data.isActive = data.isActive === "true";

  return simkesPrisma.post.update({
    where: { id },
    data,
  });
};

/**
 * Delete post
 * @param {string} id - Post ID
 * @returns {Promise<Object>} Deleted post
 * @throws {ApiError} If post not found
 */
export const deletePost = async (id) => {
  // Check if post exists
  const post = await getPostById(id);

  // Hapus file foto jika ada
  if (post.photoUrl) {
    const relativePath = post.photoUrl.replace(`${process.env.HOST_URL}/`, "");
    const filePath = path.join("public", relativePath);

    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error);
      // Continue with database deletion even if file deletion fails
    }
  }

  return simkesPrisma.post.delete({
    where: { id },
  });
};

export const postService = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getAllPublicPosts,
  getPublicPostById,
};
