import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data banner untuk response API
 * @param {Object} banner - Data banner dari database
 * @returns {Object} Data banner yang sudah diformat
 */
export const bannerResource = (banner) => {
  return {
    id: banner.id,
    title: banner.title,
    description: banner.description,
    imageUrl: banner.imageUrl,
    order: banner.order,
    isActive: banner.isActive,
    createdAt: banner.createdAt
      ? dayjs(banner.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: banner.updatedAt
      ? dayjs(banner.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data banner dengan pagination untuk response API
 * @param {Object} data - Data banner dengan pagination
 * @returns {Object} Data banner dengan pagination yang sudah diformat
 */
export const bannersResource = (data) => {
  return {
    results: data.results.map((banner) => bannerResource(banner)),
    pagination: data.pagination,
  };
};