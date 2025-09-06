import { TIMEZONE } from "../constants/dayTime.js";
import dayjs from "dayjs";

/**
 * Format data postingan untuk response API
 * @param {Object} post - Data postingan dari database
 * @returns {Object} Data postingan yang sudah diformat
 */
export const postResource = (post) => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    authorId: post.authorId,
    authorName: post.authorName,
    photoUrl: post.photoUrl || null,
    isActive: post.isActive,
    createdAt: post.createdAt
      ? dayjs(post.createdAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
    updatedAt: post.updatedAt
      ? dayjs(post.updatedAt).tz(TIMEZONE).format("YYYY-MM-DD HH:mm:ss")
      : null,
  };
};

/**
 * Format data postingan dengan pagination untuk response API
 * @param {Object} data - Data postingan dengan pagination
 * @returns {Object} Data postingan dengan pagination yang sudah diformat
 */
export const postsResource = (data) => {
  return {
    results: data.results.map((post) => postResource(post)),
    pagination: data.pagination,
  };
};
