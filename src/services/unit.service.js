import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const getAllUnits = async (query) => {
  const { unitName, page = 1, limit = 10, sortBy, sortOrder } = query;

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

  // query paralel for data & total count
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

  // final result
  return {
    results: units,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
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

  return unit;
};
