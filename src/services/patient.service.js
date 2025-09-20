import { simrsPrisma } from "../config/db.js";
import apiError from "../utils/apiError.js";

export const getPatientStats = async ({ startDate, endDate } = {}) => {
  // Set default date range to last 30 days if not provided
  const end = endDate ? new Date(`${endDate}T23:59:59Z`) : new Date();
  const start = startDate
    ? new Date(`${startDate}T00:00:00Z`)
    : new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Get total patients
  const totalPatients = await simrsPrisma.patient.count({
    where: {
      isEnabled: true,
      isSimkes: true,
    },
  });

  // Get new patients registered in date range
  const newPatients = await simrsPrisma.patient.count({
    where: {
      isEnabled: true,
      isSimkes: true,
      registeredAt: {
        gte: start,
        lte: end,
      },
    },
  });

  // Get gender distribution
  const genderDistribution = await simrsPrisma.patient.groupBy({
    by: ["genderId"],
    where: {
      isEnabled: true,
      isSimkes: true,
    },
    _count: {
      id: true,
    },
  });

  // Format gender distribution with names
  const genders = await simrsPrisma.gender.findMany();
  const genderStats = genderDistribution.map((item) => {
    const gender = genders.find((g) => g.id === item.genderId);
    return {
      genderId: item.genderId,
      genderName: gender?.gender || "Unknown",
      count: item._count.id,
      percentage: Math.round((item._count.id / totalPatients) * 100),
    };
  });

  // Get age distribution
  const patients = await simrsPrisma.patient.findMany({
    where: {
      isEnabled: true,
      isSimkes: true,
      birthDate: {
        not: null,
      },
    },
    select: {
      birthDate: true,
    },
  });

  // Calculate age groups
  const ageGroups = {
    "Under 18": 0,
    "18-30": 0,
    "31-45": 0,
    "46-60": 0,
    "Above 60": 0,
  };

  patients.forEach((patient) => {
    if (patient.birthDate) {
      const birthDate = new Date(patient.birthDate);
      const age = Math.floor(
        (new Date() - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
      );

      if (age < 18) ageGroups["Under 18"]++;
      else if (age <= 30) ageGroups["18-30"]++;
      else if (age <= 45) ageGroups["31-45"]++;
      else if (age <= 60) ageGroups["46-60"]++;
      else ageGroups["Above 60"]++;
    }
  });

  // Format age distribution
  const ageDistribution = Object.entries(ageGroups).map(([range, count]) => ({
    ageRange: range,
    count,
    percentage: Math.round((count / patients.length) * 100) || 0,
  }));

  // Get monthly registration trend for the past year
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  // Dapatkan data registrasi bulanan
  const registrationData = await simrsPrisma.patient.findMany({
    where: {
      isEnabled: true,
      isSimkes: true,
      registeredAt: {
        gte: oneYearAgo,
      },
    },
    select: {
      registeredAt: true,
    },
  });

  // Proses data untuk mendapatkan tren bulanan
  const monthlyData = {};

  registrationData.forEach((patient) => {
    if (patient.registeredAt) {
      const date = new Date(patient.registeredAt);
      const year = date.getFullYear();
      const month = date.getMonth();
      const key = `${year}-${month}`;

      if (!monthlyData[key]) {
        monthlyData[key] = {
          year,
          month: month + 1, // Bulan dimulai dari 0
          count: 0,
        };
      }

      monthlyData[key].count++;
    }
  });

  // Konversi ke array dan urutkan berdasarkan tahun dan bulan
  const monthlyRegistrations = Object.values(monthlyData).sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.month - b.month;
  });

  // Format monthly trend
  const monthlyTrend = monthlyRegistrations.map((item) => {
    const month = item.month;
    const year = item.year;
    const monthName = new Date(year, month - 1, 1).toLocaleString("default", {
      month: "long",
    });

    return {
      month: monthName,
      year,
      count: item.count,
    };
  });

  return {
    totalPatients,
    newPatients,
    genderDistribution: genderStats,
    ageDistribution,
    monthlyTrend,
  };
};

export const getAllPatients = async (query = {}) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sortBy = "registeredAt",
    sortOrder = "desc",
  } = query;

  const skip = (page - 1) * limit;
  const take = parseInt(limit);

  // Buat filter berdasarkan parameter search
  const filter = {
    isEnabled: true,
    isSimkes: true,
  };

  if (search) {
    filter.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { identity: { contains: search, mode: "insensitive" } },
    ];
  }

  // Buat pengaturan sorting
  const orderBy = {};
  orderBy[sortBy] = sortOrder.toLowerCase();

  // Ambil data dengan pagination
  const [patients, total] = await Promise.all([
    simrsPrisma.patient.findMany({
      where: filter,
      include: {
        gender: true,
      },
      skip,
      take,
      orderBy,
    }),
    simrsPrisma.patient.count({ where: filter }),
  ]);

  // Hitung total halaman
  const totalPages = Math.ceil(total / take);

  return {
    results: patients,
    pagination: {
      total,
      page: parseInt(page),
      limit: take,
      totalPages,
    },
  };
};

export const getPatientByIdentity = async (identity) => {
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity, isEnabled: true, isSimkes: true },
    include: {
      gender: true,
    },
  });

  if (!patient) {
    throw new apiError("Data pasien tidak ditemukan", 404);
  }

  return patient;
};

export const getPatientById = async (id) => {
  const patient = await simrsPrisma.patient.findUnique({
    where: { id: parseInt(id) },
    include: {
      gender: true,
    },
  });

  if (!patient) {
    throw new apiError("Data pasien tidak ditemukan", 404);
  }

  return patient;
};

export const updatePatient = async (identity, data) => {
  // Konversi birthDate dari string ke Date jika ada
  let updateData = { ...data };
  if (data.birthDate) {
    const dateObj = new Date(data.birthDate);

    // Validasi tambahan untuk memastikan tanggal valid
    if (isNaN(dateObj.getTime())) {
      throw new apiError("Format tanggal tidak valid", 400);
    }

    updateData.birthDate = dateObj;
  }

  // Update data pasien
  const updatedPatient = await simrsPrisma.patient.update({
    where: { identity },
    data: updateData,
    include: {
      gender: true,
    },
  });

  return updatedPatient;
};

export const ensurePatientExists = async (user) => {
  // Cek apakah pasien sudah ada
  const existingPatient = await simrsPrisma.patient.findUnique({
    where: { identity: user.identity },
  });

  if (existingPatient) {
    // Update pasien yang sudah ada
    const updatedPatient = await simrsPrisma.patient.update({
      where: { id: existingPatient.id },
      data: {
        name: user.profile.name,
        phoneNumber: user.phone,
        isEnabled: true,
        registeredAt: new Date(),
        isSimkes: true,
      },
    });
    return updatedPatient;
  } else {
    // Dapatkan ID pasien berikutnya
    const maxPatient = await simrsPrisma.patient.findFirst({
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
      },
    });

    const newPatientId = (maxPatient?.id || 0) + 1;

    // Buat pasien baru dengan ID auto-increment
    const newPatient = await simrsPrisma.patient.create({
      data: {
        id: newPatientId,
        name: user.profile.name,
        identity: user.identity,
        phoneNumber: user.phone,
        isEnabled: true,
        registeredAt: new Date(),
        isSimkes: true,
      },
    });

    return newPatient;
  }
};
