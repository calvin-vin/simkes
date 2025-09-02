import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Save QR code information to the database
 * @param {Object} data - QR code data
 * @param {string} data.reservationId - ID of the reservation
 * @param {string} data.qrCodeUrl - Public URL of the QR code
 * @param {string} data.qrCodeContent - Content encoded in the QR code
 * @param {string} data.filePath - File path where QR code is stored
 * @returns {Promise<Object>} Created QR code record
 */
export const saveQRCode = async (data) => {
  const { reservationId, qrCodeUrl, qrCodeContent, filePath } = data;

  return simkesPrisma.reservationQRCode.create({
    data: {
      reservationId,
      qrCodeUrl,
      qrCodeContent,
      filePath,
    },
  });
};

/**
 * Get QR code by reservation ID
 * @param {string} reservationId - ID of the reservation
 * @returns {Promise<Object>} QR code record
 * @throws {ApiError} If QR code not found
 */
export const getQRCodeByReservationId = async (reservationId) => {
  const qrCode = await simkesPrisma.reservationQRCode.findUnique({
    where: {
      reservationId,
    },
  });

  if (!qrCode) {
    throw new ApiError("QR code not found", 404);
  }

  return qrCode;
};

/**
 * Update QR code information
 * @param {string} id - ID of the QR code record
 * @param {Object} data - Updated QR code data
 * @returns {Promise<Object>} Updated QR code record
 */
export const updateQRCode = async (id, data) => {
  return simkesPrisma.reservationQRCode.update({
    where: { id },
    data,
  });
};

/**
 * Delete QR code record
 * @param {string} id - ID of the QR code record
 * @returns {Promise<Object>} Deleted QR code record
 */
export const deleteQRCode = async (id) => {
  return simkesPrisma.reservationQRCode.delete({
    where: { id },
  });
};

export const qrCodeService = {
  saveQRCode,
  getQRCodeByReservationId,
  updateQRCode,
  deleteQRCode,
};
