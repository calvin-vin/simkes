import express from "express";
import {
  getAllMedicines,
  getMedicineById,
} from "../controllers/medicine.controller.js";
import { getAllDoctorSchedules } from "../controllers/doctorSchedule.controller.js";

const router = express.Router();

router.get("/", getAllDoctorSchedules);
router.get("/:id", getMedicineById);

export default router;
