import { simrsPrisma } from "../config/db.js";
import apiError from "../utils/apiError.js";

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
