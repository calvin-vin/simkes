import express from "express";
import { protect } from "../middlewares/auth.js";
import { ensurePatient } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/ensure", protect, ensurePatient);

export default router;
