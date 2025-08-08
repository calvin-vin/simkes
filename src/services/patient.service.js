import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const findPatientIdOrFail = async ({ patientId, select }) => {
  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
    ...(select && { select }),
  });

  if (!patient) {
    throw new ApiError("Patient not found", 404);
  }

  return patient;
};

export const ensurePatientExists = async (user) => {
  const patient = await prisma.patient.upsert({
    where: { id: user.id },
    update: {
      name: user.profile.name,
      nik: user.identity,
      phone: user.phone,
      email: user.email,
    },
    create: {
      id: user.id,
      name: user.profile.name,
      nik: user.identity,
      phone: user.phone,
      email: user.email,
    },
  });

  return patient;
};
