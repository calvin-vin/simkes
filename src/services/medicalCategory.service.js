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
    const { data: simrsData } = await axios.get(
      `${process.env.MOCK_API_URL}/medical-categories`
    );

    if (!Array.isArray(simrsData)) {
      throw new Error("Invalid response format from SIMRS");
    }

    // Ambil semua simrsId dari API
    const simrsIdsFromAPI = simrsData.map((item) => String(item.id));

    // Simpan atau update data
    for (const item of simrsData) {
      const simrsId = String(item.id);

      await prisma.medicalCategory.upsert({
        where: { simrsId },
        update: {
          name: item.name,
          syncedAt: new Date(),
        },
        create: {
          simrsId,
          name: item.name,
          syncedAt: new Date(),
        },
      });
    }

    // Hapus data lokal yang tidak ada di SIMRS
    await prisma.medicalCategory.deleteMany({
      where: {
        simrsId: {
          notIn: simrsIdsFromAPI,
        },
      },
    });

    console.log(`✅ Sinkronisasi selesai. Total: ${simrsData.length} data.`);
  } catch (error) {
    console.error("❌ Gagal sinkronisasi medical categories:", error.message);
    throw error;
  }
};

export const getAllMedicalCategories = async (query) => {
  const { page = 1, limit = 10, search, sortBy, sortOrder } = query;

  const filters = {};
  if (search) {
    filters.name = { contains: search, mode: "insensitive" };
  }

  const orderBy = {};
  if (sortBy && ["name", "createdAt", "syncedAt"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["createdAt"] = "desc"; // default sort
  }

  const [categories, total] = await Promise.all([
    prisma.medicalCategory.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
    }),
    prisma.medicalCategory.count({
      where: filters,
    }),
  ]);

  return {
    results: categories,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};
