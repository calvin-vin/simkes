import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";
import axios from "axios";

export const findMedicalCategoryOrFail = async ({ medicalCategoryId }) => {
  const medicalCategory = await prisma.medicalCategory.findUnique({
    where: { id: medicalCategoryId },
  });

  if (!medicalCategory) {
    throw new ApiError("Medical category not found", 404);
  }

  return medicalCategory;
};

export const syncMedicalCategories = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.MOCK_API_URL}/medical-categories`
    );

    for (const item of data) {
      try {
        const simrsId = String(item.id);
        const result = await prisma.medicalCategory.upsert({
          where: { simrsId },
          update: { name: item.name, syncedAt: new Date() },
          create: {
            simrsId,
            name: item.name,
            syncedAt: new Date(),
          },
        });

        console.log(
          `✅ Upserted: ${result.name} (simrsId=${simrsId}) at ${result.syncedAt}`
        );
      } catch (err) {
        console.error(`❌ Failed upsert simrsId=${simrsId}:`, err.message);
        throw new Error(`Upsert failed for simrsId=${item.id}`);
      }
    }

    console.log("✅ Finished syncing medical categories");
  } catch (error) {
    console.log("❌ Error syncing medical categories:", error.message);
    throw error;
  }
};
