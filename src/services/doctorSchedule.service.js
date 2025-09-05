import { simrsPrisma } from "../config/db.js";
import dayjs from "dayjs";
import { getAverageRatingByDoctorId } from "./doctorRating.service.js";

export const getDoctorSchedules = async (query) => {
  const {
    page = 1,
    limit = 10,
    doctorName,
    unitId,
    date,
    sortBy,
    sortOrder,
    minRating,
    maxRating,
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

  // Jika ada filter rating, kita perlu mengambil semua data terlebih dahulu
  const hasRatingFilter = minRating !== undefined || maxRating !== undefined;
  
  if (!hasRatingFilter) {
    // Jika tidak ada filter rating, gunakan paginasi database normal
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
    
    // Ambil rating untuk setiap dokter
    const schedulesWithRating = await Promise.all(
      schedules.map(async (schedule) => {
        const { averageRating, totalRatings } = await getAverageRatingByDoctorId(schedule.doctor.id);
        return {
          ...schedule,
          doctor: {
            ...schedule.doctor,
            averageRating,
            totalRatings
          }
        };
      })
    );
    
    return {
      results: schedulesWithRating,
      pagination: {
        total: total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    };
  } else {
    // Jika ada filter rating, ambil semua data terlebih dahulu
    const allSchedules = await simrsPrisma.doctorSchedule.findMany({
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
      orderBy,
    });
    
    // Ambil rating untuk semua dokter
    const allSchedulesWithRating = await Promise.all(
      allSchedules.map(async (schedule) => {
        const { averageRating, totalRatings } = await getAverageRatingByDoctorId(schedule.doctor.id);
        return {
          ...schedule,
          doctor: {
            ...schedule.doctor,
            averageRating,
            totalRatings
          }
        };
      })
    );
    
    // Filter berdasarkan rating
    let filteredSchedules = allSchedulesWithRating;
    if (minRating !== undefined) {
      filteredSchedules = filteredSchedules.filter(
        schedule => schedule.doctor.averageRating >= Number(minRating)
      );
    }
    if (maxRating !== undefined) {
      filteredSchedules = filteredSchedules.filter(
        schedule => schedule.doctor.averageRating <= Number(maxRating)
      );
    }
    
    // Hitung total setelah filter
    const filteredTotal = filteredSchedules.length;
    
    // Terapkan paginasi secara manual
    const startIndex = (page - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedSchedules = filteredSchedules.slice(startIndex, endIndex);
    
    return {
      results: paginatedSchedules,
      pagination: {
        total: filteredTotal,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(filteredTotal / Number(limit)),
      },
    };
  }
};
