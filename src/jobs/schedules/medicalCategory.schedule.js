import { medicalCategoryQueue } from "../queues/medicalCategory.queue.js";

export const scheduleMedicalCategorySync = async () => {
  const job = await medicalCategoryQueue.add(
    "sync-job",
    {},
    {
      repeat: {
        cron: "*/5 * * * *", // Setiap 5 menit
      },
    }
  );
};
