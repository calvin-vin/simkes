import { scheduleMedicalCategorySync } from "./schedules/medicalCategory.schedule.js";
import "./workers/medicalCategory.worker.js";

const bootstrap = async () => {
  await scheduleMedicalCategorySync();
  console.log("📌 Scheduled medical category sync");

  // Workers akan otomatis listen karena sudah diekspor
};

bootstrap();
