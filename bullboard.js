import express from "express";
import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter.js";
import { medicalCategoryQueue } from "./src/jobs/queues/medicalCategory.queue.js";

const app = express();
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(medicalCategoryQueue)],
  serverAdapter,
});

app.use("/admin/queues", serverAdapter.getRouter());

app.listen(3100, () => {
  console.log("🚀 BullBoard running at http://localhost:3100/admin/queues");
});
