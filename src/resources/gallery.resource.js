import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data gallery untuk response API
 * @param {Object} gallery - Data gallery dari database
 * @returns {Object} Data gallery yang sudah diformat
 */
export const galleryResource = (gallery) => {
  return {
    id: gallery.id,
    title: gallery.title,
    description: gallery.description,
    isActive: gallery.isActive,
    photos: gallery.photos
      ? gallery.photos.map((photo) => ({
          id: photo.id,
          photoUrl: photo.photoUrl,
          createdAt: dayjs(photo.createdAt)
            .tz(TIMEZONE)
            .format("YYYY-MM-DD HH:mm:ss"),
        }))
      : [],
    createdAt: gallery.createdAt
      ? dayjs(gallery.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: gallery.updatedAt
      ? dayjs(gallery.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data gallery dengan pagination untuk response API
 * @param {Object} data - Data gallery dengan pagination
 * @returns {Object} Data gallery dengan pagination yang sudah diformat
 */
export const galleriesResource = (data) => {
  return {
    results: data.results.map((gallery) => galleryResource(gallery)),
    pagination: data.pagination,
  };
};
