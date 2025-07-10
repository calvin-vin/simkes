import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const findMedicalCategoryOrFail = async ({ medicalCategoryId }) => {
  const medicalCategory = await prisma.medicalCategory.findUnique({
    where: { id: medicalCategoryId },
  });

  if (!medicalCategory) {
    throw new ApiError("Medical category not found", 404);
  }

  return medicalCategory;
};
