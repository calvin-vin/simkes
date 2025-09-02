import express from "express";
import { getQRCodeByReservationId } from "../controllers/qrcode.controller.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

/**
 * @route GET /api/v1/qrcodes/:reservationId
 * @desc Get QR code by reservation ID
 * @access Private
 */
router.get("/:reservationId", protect, getQRCodeByReservationId);

export default router;