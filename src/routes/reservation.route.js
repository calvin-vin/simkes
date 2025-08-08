import express from "express";
import { createReservation } from "../controllers/reservation.controller.js";
import { protect } from "../middlewares/auth.js";
import { uploadReferralFile } from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/",
  protect,
  uploadReferralFile.single("referralFile"),
  createReservation
);

export default router;
