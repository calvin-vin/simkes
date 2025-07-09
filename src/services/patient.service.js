import prisma from "../config/db.js";

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
