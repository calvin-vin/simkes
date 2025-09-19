import express from "express";
import { getAllDoctorSchedules, getDoctorScheduleById } from "../controllers/doctorSchedule.controller.js";

const router = express.Router();

router.get("/", getAllDoctorSchedules);
router.get("/:id", getDoctorScheduleById);

export default router;
