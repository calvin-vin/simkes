import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data penilaian unit untuk response API
 * @param {Object} unitRating - Data penilaian unit dari database
 * @returns {Object} Data penilaian unit yang sudah diformat
 */
export const unitRatingResource = (unitRating) => {
  return {
    id: unitRating.id,
    reservationId: unitRating.reservationId,
    unitId: unitRating.unitId,
    rating: unitRating.rating,
    comment: unitRating.comment,
    createdAt: unitRating.createdAt
      ? dayjs(unitRating.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: unitRating.updatedAt
      ? dayjs(unitRating.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data penilaian unit dengan pagination untuk response API
 * @param {Object} data - Data penilaian unit dengan pagination
 * @returns {Object} Data penilaian unit dengan pagination yang sudah diformat
 */
export const unitRatingsResource = (data) => {
  return {
    results: data.results.map((unitRating) =>
      unitRatingResource(unitRating)
    ),
    pagination: data.pagination,
  };
};

/**
 * Format data rata-rata rating unit untuk response API
 * @param {Object} data - Data rata-rata rating unit
 * @returns {Object} Data rata-rata rating unit yang sudah diformat
 */
export const unitAverageRatingResource = (data) => {
  return {
    unitId: data.unitId,
    averageRating: data.averageRating,
    totalRatings: data.totalRatings,
  };
};