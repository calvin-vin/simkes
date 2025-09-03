import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Update callStatus reservasi
 * @param {string} id - ID reservasi
 * @param {string} callStatus - Status panggil ("0": belumdipanggil, "1": dipanggil, "2": sudahdipanggil)
 * @returns {Promise<Object>} Updated reservation
 * @throws {ApiError} If reservation not found or cannot be updated
 */
export const updateCallStatus = async (id, callStatus) => {
  // Cek apakah reservasi ada
  const reservation = await simrsPrisma.reservation.findFirst({
    where: { 
      id,
      isEnabled: true,
    },
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  if (!reservation) {
    throw new ApiError("Reservasi tidak ditemukan", 404);
  }

  // Cek apakah reservasi sudah dibatalkan
  if (reservation.isCancelled) {
    throw new ApiError("Tidak dapat mengubah status panggil reservasi yang sudah dibatalkan", 400);
  }

  // Cek apakah reservasi sudah dikonfirmasi
  if (!reservation.isConfirmed) {
    throw new ApiError("Tidak dapat mengubah status panggil reservasi yang belum dikonfirmasi", 400);
  }

  // Update callStatus reservasi
  const updatedReservation = await simrsPrisma.reservation.update({
    where: { id },
    data: { callStatus },
    include: {
      patient: true,
      doctor: true,
      unit: true,
      paymentMethod: true,
      referralSource: true,
    },
  });

  return updatedReservation;
};