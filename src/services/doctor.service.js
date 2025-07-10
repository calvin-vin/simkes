import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const findDoctorOrFail = async ({ doctorId, includes }) => {
  const doctor = await prisma.doctor.findUnique({
    where: { id: doctorId },
    include: includes,
  });

  if (!doctor) {
    throw new ApiError("Doctor not found", 404);
  }

  return doctor;
};
