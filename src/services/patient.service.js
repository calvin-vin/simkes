import { simrsPrisma } from "../config/db.js";
import apiError from "../utils/apiError.js";

export const getPatientByIdentity = async (identity) => {
  const patient = await simrsPrisma.patient.findUnique({
    where: { identity },
    include: {
      gender: true,
    },
  });

  if (!patient) {
    throw new apiError(404, "Data pasien tidak ditemukan");
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
      throw new apiError(400, "Format tanggal tidak valid");
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
      },
    });

    return newPatient;
  }
};
