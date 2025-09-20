import { simkesPrisma } from "../config/db.js";
import fs from "fs";
import path from "path";
import { saveFile } from "../utils/saveFile.js";
import ApiError from "../utils/apiError.js";

export const ensureAmbulanceStaffExists = async (user) => {
  const ambulanceStaff = await simkesPrisma.ambulanceStaff.upsert({
    where: { identity: user.identity },
    update: {
      name: user.profile.name,
      email: user.email,
      phone: user.phone,
    },
    create: {
      identity: user.identity,
      name: user.profile.name,
      email: user.email,
      phone: user.phone,
    },
  });

  return ambulanceStaff;
};

export const getAllAmbulanceStaff = async (query = {}) => {
  const {
    page = 1,
    limit = 10,
    search,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = query;

  // Build filters
  const filters = {};

  if (search) {
    filters.OR = [
      {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        identity: {
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

  // Get ambulance staffs with pagination
  const [ambulanceStaffs, total] = await Promise.all([
    simkesPrisma.ambulanceStaff.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: Number(limit),
      orderBy,
    }),
    simkesPrisma.ambulanceStaff.count({ where: filters }),
  ]);

  return {
    results: ambulanceStaffs,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getAmbulanceStaffByIdentity = async (identity) => {
  const ambulanceStaff = await simkesPrisma.ambulanceStaff.findUnique({
    where: { identity },
  });

  if (!ambulanceStaff) {
    throw new ApiError("Ambulance staff not found", 404);
  }

  return ambulanceStaff;
};

export const updateAmbulanceStaffPhoto = async (identity, photoFile) => {
  if (!photoFile) {
    throw new ApiError("Please upload a photo", 400);
  }

  // Get existing staff to check if there's a photo to delete
  const existingStaff = await simkesPrisma.ambulanceStaff.findUnique({
    where: { identity },
  });

  // Delete old photo if exists
  if (existingStaff?.photo) {
    const relativePath = existingStaff.photo.replace(
      `${process.env.HOST_URL}/`,
      ""
    );
    const oldFilePath = path.join("public", relativePath);

    try {
      // Use fs.promises.unlink instead of fs.unlink to properly handle promises
      await fs.promises.unlink(oldFilePath);
      console.log(`Successfully deleted old file: ${oldFilePath}`);
    } catch (error) {
      console.error(`Error deleting old file ${oldFilePath}:`, error);
      // Continue with update even if file deletion fails
    }
  }

  // Save new photo file
  const savedFilePath = await saveFile({
    buffer: photoFile.buffer,
    baseFolder: "public",
    subFolder: "ambulance-staffs",
    filenamePrefix: `staff-${identity}`,
    extension: path.extname(photoFile.originalname),
  });

  // Generate full URL for photo
  const photoUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
    /\\/g,
    "/"
  )}`;

  // Update staff record with new photo
  const updatedStaff = await simkesPrisma.ambulanceStaff.update({
    where: { identity },
    data: {
      photo: photoUrl,
    },
  });

  return updatedStaff;
};
