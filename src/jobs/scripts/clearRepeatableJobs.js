import { medicalCategoryQueue } from "../queues/medicalCategory.queue.js";

const jobs = await medicalCategoryQueue.getJobSchedulers();
for (const job of jobs) {
  await medicalCategoryQueue.removeJobScheduler(job.key);
}

const removeRepeatableJob = async () => {
  try {
    const repeatables = await medicalCategoryQueue.getJobSchedulers();

    for (const job of repeatables) {
      await medicalCategoryQueue.removeJobScheduler(job.key);
    }

    console.log("✅ All repeatable jobs cleared.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error removing repeatable job:", error);
    process.exit(1);
  }
};

removeRepeatableJob();
