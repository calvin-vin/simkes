import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data penilaian fasilitas untuk response API
 * @param {Object} facilityRating - Data penilaian fasilitas dari database
 * @returns {Object} Data penilaian fasilitas yang sudah diformat
 */
export const facilityRatingResource = (facilityRating) => {
  return {
    id: facilityRating.id,
    reservationId: facilityRating.reservationId,
    facilityId: facilityRating.facilityId,
    rating: facilityRating.rating,
    comment: facilityRating.comment,
    createdAt: facilityRating.createdAt
      ? dayjs(facilityRating.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: facilityRating.updatedAt
      ? dayjs(facilityRating.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data penilaian fasilitas dengan pagination untuk response API
 * @param {Object} data - Data penilaian fasilitas dengan pagination
 * @returns {Object} Data penilaian fasilitas dengan pagination yang sudah diformat
 */
export const facilityRatingsResource = (data) => {
  return {
    results: data.results.map((facilityRating) =>
      facilityRatingResource(facilityRating)
    ),
    pagination: data.pagination,
  };
};

/**
 * Format data rata-rata rating fasilitas untuk response API
 * @param {Object} data - Data rata-rata rating fasilitas
 * @returns {Object} Data rata-rata rating fasilitas yang sudah diformat
 */
export const facilityAverageRatingResource = (data) => {
  return {
    facilityId: data.facilityId,
    averageRating: data.averageRating,
    totalRatings: data.totalRatings,
  };
};