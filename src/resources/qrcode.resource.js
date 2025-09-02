import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

export const qrCodeResource = (qrCode) => {
  return {
    id: qrCode.id,
    reservationId: qrCode.reservationId,
    qrCodeUrl: qrCode.qrCodeUrl,
    qrCodeContent: qrCode.qrCodeContent,
    filePath: qrCode.filePath,
    createdAt: dayjs(qrCode.createdAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: dayjs(qrCode.updatedAt)
      .tz(TIMEZONE)
      .format("YYYY-MM-DD HH:mm:ss"),
  };
};