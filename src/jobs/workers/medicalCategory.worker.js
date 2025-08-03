import { Worker } from "bullmq";
import redis from "../../config/redis.js";
import { syncMedicalCategories } from "../../services/medicalCategory.service.js";

export const medicalCategoryWorker = new Worker(
  "medical-category",
  async () => {
    try {
      console.log("👷 Worker started job");
      await syncMedicalCategories();
      console.log("✅ Job completed");
      return { message: "Medical categories synced successfully" };
    } catch (err) {
      console.error("❌ Worker error:", err);
      throw err;
    }
  },
  { connection: redis }
);
