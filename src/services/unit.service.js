import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { getAverageRatingByUnitId } from "./unitRating.service.js";

export const getAllUnits = async (query) => {
  const { unitName, page = 1, limit = 10, sortBy, sortOrder, minRating, maxRating } = query;

  // filter unit (poli)
  const filters = {
    isEnabled: true,
    ...(unitName
      ? { unitName: { contains: unitName, mode: "insensitive" } }
      : {}),
    doctorSchedules: {
      some: { isEnabled: true }, // only units with active doctor schedules
    },
  };

  // sorting
  const orderBy = {};
  if (sortBy && ["id", "unitName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  // Jika ada filter rating, kita perlu mengambil semua data terlebih dahulu
  const hasRatingFilter = minRating !== undefined || maxRating !== undefined;
  
  if (!hasRatingFilter) {
    // Jika tidak ada filter rating, gunakan paginasi database normal
    const [units, total] = await Promise.all([
      simrsPrisma.unit.findMany({
        where: filters,
        select: {
          id: true,
          unitName: true,
          departmentId: true,
        },
        skip: (page - 1) * Number(limit),
        take: Number(limit),
        orderBy,
      }),
      simrsPrisma.unit.count({
        where: filters,
      }),
    ]);
    
    // Ambil rating untuk setiap unit
    const unitsWithRating = await Promise.all(
      units.map(async (unit) => {
        const { averageRating, totalRatings } = await getAverageRatingByUnitId(unit.id);
        return {
          ...unit,
          averageRating,
          totalRatings
        };
      })
    );
    
    return {
      results: unitsWithRating,
      pagination: {
        total: total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    };
  } else {
    // Jika ada filter rating, ambil semua data terlebih dahulu
    const allUnits = await simrsPrisma.unit.findMany({
      where: filters,
      select: {
        id: true,
        unitName: true,
        departmentId: true,
      },
      orderBy,
    });
    
    // Ambil rating untuk semua unit
    const allUnitsWithRating = await Promise.all(
      allUnits.map(async (unit) => {
        const { averageRating, totalRatings } = await getAverageRatingByUnitId(unit.id);
        return {
          ...unit,
          averageRating,
          totalRatings
        };
      })
    );
    
    // Filter berdasarkan rating
    let filteredUnits = allUnitsWithRating;
    if (minRating !== undefined) {
      filteredUnits = filteredUnits.filter(
        unit => unit.averageRating >= Number(minRating)
      );
    }
    if (maxRating !== undefined) {
      filteredUnits = filteredUnits.filter(
        unit => unit.averageRating <= Number(maxRating)
      );
    }
    
    // Hitung total setelah filter
    const filteredTotal = filteredUnits.length;
    
    // Terapkan paginasi secara manual
    const startIndex = (page - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedUnits = filteredUnits.slice(startIndex, endIndex);
    
    return {
      results: paginatedUnits,
      pagination: {
        total: filteredTotal,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(filteredTotal / Number(limit)),
      },
    };
  }
};

export const getUnitById = async (id) => {
  const unit = await simrsPrisma.unit.findFirst({
    where: {
      id: Number(id),
      isEnabled: true,
      doctorSchedules: {
        some: { isEnabled: true },
      },
    },
    select: {
      id: true,
      unitName: true,
      departmentId: true,
    },
  });

  if (!unit) {
    throw new ApiError("Data unit tidak ditemukan", 404);
  }

  // Ambil rating untuk unit
  const { averageRating, totalRatings } = await getAverageRatingByUnitId(unit.id);
  
  return {
    ...unit,
    averageRating,
    totalRatings
  };
};
