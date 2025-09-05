import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data fasilitas untuk response API
 * @param {Object} facility - Data fasilitas dari database
 * @returns {Object} Data fasilitas yang sudah diformat
 */
export const facilityResource = (facility) => {
  return {
    id: facility.id,
    name: facility.name,
    description: facility.description,
    status: facility.status,
    photos: facility.photos
      ? facility.photos.map((photo) => ({
          id: photo.id,
          photoUrl: photo.photoUrl,
          createdAt: dayjs(photo.createdAt)
            .tz(TIMEZONE)
            .format("YYYY-MM-DD HH:mm:ss"),
        }))
      : [],
    createdAt: facility.createdAt
      ? dayjs(facility.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: facility.updatedAt
      ? dayjs(facility.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data fasilitas dengan pagination untuk response API
 * @param {Object} data - Data fasilitas dengan pagination
 * @returns {Object} Data fasilitas dengan pagination yang sudah diformat
 */
export const facilitiesResource = (data) => {
  return {
    results: data.results.map((facility) => facilityResource(facility)),
    pagination: data.pagination,
  };
};