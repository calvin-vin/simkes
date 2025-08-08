import rateLimit from "express-rate-limit";
import ApiError from "../utils/apiError.js";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 10 : 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    next(
      new ApiError(
        "Terlalu banyak percobaan login. Silakan coba lagi setelah 15 menit.",
        options.statusCode
      )
    );
  },
});

export const defaultLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 200 : 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    next(
      new ApiError(
        "Terlalu banyak permintaan. Silakan coba lagi nanti.",
        options.statusCode
      )
    );
  },
});
