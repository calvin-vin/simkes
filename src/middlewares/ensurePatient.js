import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const ensurePatientMiddleware = async (req, res, next) => {
  try {
    const patient = await prisma.patient.findUnique({
      where: {
        id: req.user.id,
      },
    });

    if (!patient) {
      return next(new ApiError("Forbidden: Ensure patient first.", 403));
    }
    next();
  } catch (err) {
    console.error("protect error:", err);
    next(err);
  }
};
