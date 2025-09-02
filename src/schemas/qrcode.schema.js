import { z } from "zod";

export const qrCodeSchema = z.object({
  reservationId: z.string({
    required_error: "Reservation ID is required",
  }),
  qrCodeUrl: z.string({
    required_error: "QR Code URL is required",
  }),
  qrCodeContent: z.string({
    required_error: "QR Code content is required",
  }),
  filePath: z.string({
    required_error: "File path is required",
  }),
});