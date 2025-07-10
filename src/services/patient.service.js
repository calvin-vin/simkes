import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const findPatientWithExternalIdOrFail = async ({
  patientExternalId,
  select,
}) => {
  const patient = await prisma.patient.findUnique({
    where: { externalId: patientExternalId },
    select,
  });

  if (!patient) {
    throw new ApiError("Patient not found", 404);
  }

  return patient;
};

export const ensurePatientExists = async (user) => {
  const patient = await prisma.patient.upsert({
    where: { externalId: user.id },
    update: {
      name: user.profile.name,
      nik: user.identity,
      phone: user.phone,
    },
    create: {
      externalId: user.id,
      name: user.profile.name,
      nik: user.identity,
      phone: user.phone,
    },
  });

  return patient;
};
