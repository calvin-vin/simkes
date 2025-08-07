import prisma from "../config/db.js";

export const ensureAmbulanceStaffExists = async (user) => {
  const ambulanceStaff = await prisma.ambulanceStaff.upsert({
    where: { id: user.id },
    update: {
      name: user.profile.name,
      email: user.email,
      phone: user.phone,
    },
    create: {
      id: user.id,
      name: user.profile.name,
      email: user.email,
      phone: user.phone,
    },
  });

  return ambulanceStaff;
};
