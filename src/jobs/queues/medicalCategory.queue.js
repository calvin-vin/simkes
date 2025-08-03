import { Queue } from "bullmq";
import redis from "../../config/redis.js";

export const medicalCategoryQueue = new Queue("medical-category", {
  connection: redis,
});
