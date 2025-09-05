import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data penilaian dokter untuk response API
 * @param {Object} doctorRating - Data penilaian dokter dari database
 * @returns {Object} Data penilaian dokter yang sudah diformat
 */
export const doctorRatingResource = (doctorRating) => {
  return {
    id: doctorRating.id,
    reservationId: doctorRating.reservationId,
    doctorId: doctorRating.doctorId,
    rating: doctorRating.rating,
    comment: doctorRating.comment,
    createdAt: doctorRating.createdAt
      ? dayjs(doctorRating.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: doctorRating.updatedAt
      ? dayjs(doctorRating.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data penilaian dokter dengan pagination untuk response API
 * @param {Object} data - Data penilaian dokter dengan pagination
 * @returns {Object} Data penilaian dokter dengan pagination yang sudah diformat
 */
export const doctorRatingsResource = (data) => {
  return {
    results: data.results.map((doctorRating) =>
      doctorRatingResource(doctorRating)
    ),
    pagination: data.pagination,
  };
};

/**
 * Format data rata-rata rating dokter untuk response API
 * @param {Object} data - Data rata-rata rating dokter
 * @returns {Object} Data rata-rata rating dokter yang sudah diformat
 */
export const doctorAverageRatingResource = (data) => {
  return {
    doctorId: data.doctorId,
    averageRating: data.averageRating,
    totalRatings: data.totalRatings,
  };
};
