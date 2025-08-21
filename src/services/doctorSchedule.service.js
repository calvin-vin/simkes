import { simrsPrisma } from "../config/db.js";
import dayjs from "dayjs";

export const getDoctorSchedules = async (query) => {
  const {
    page = 1,
    limit = 10,
    doctorName,
    unitId,
    date,
    sortBy,
    sortOrder,
  } = query;

  let dayName = null;
  if (date) {
    const jsDate = dayjs(date).locale("id");
    dayName = jsDate.format("dddd").toUpperCase(); // ex: "JUMAT"
  }

  const filters = {
    isEnabled: true,
    ...(unitId ? { unitId: Number(unitId) } : {}),
    ...(dayName ? { days: { contains: dayName } } : {}),
    doctor: {
      isEnabled: true,
      ...(doctorName
        ? { fullName: { contains: doctorName, mode: "insensitive" } }
        : {}),
    },
  };

  let orderBy = {};
  if (sortBy && ["id", "unitId"].includes(sortBy)) {
    // kolom langsung di doctorSchedule
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else if (sortBy === "fullName") {
    // kolom relasi doctor
    orderBy = {
      doctor: {
        fullName:
          sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
            ? sortOrder.toLowerCase()
            : "asc",
      },
    };
  } else {
    // default multiple orderBy
    orderBy = [{ unitId: "asc" }, { doctor: { fullName: "asc" } }];
  }

  const [schedules, total] = await Promise.all([
    simrsPrisma.doctorSchedule.findMany({
      where: filters,
      include: {
        unit: { select: { id: true, unitName: true } },
        doctor: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      skip: (page - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.doctorSchedule.count({ where: filters }),
  ]);

  return {
    results: schedules,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};
