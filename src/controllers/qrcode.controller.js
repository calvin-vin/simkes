import { qrCodeResource } from "../resources/qrcode.resource.js";
import { qrCodeSchema } from "../schemas/qrcode.schema.js";
import * as qrCodeService from "../services/qrcode.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Get QR code by reservation ID
 */
export const getQRCodeByReservationId = catchAsync(async (req, res) => {
  const { reservationId } = req.params;
  
  const qrCode = await qrCodeService.getQRCodeByReservationId(reservationId);
  
  return apiSuccess(
    res,
    200,
    "QR code retrieved successfully",
    qrCodeResource(qrCode)
  );
});