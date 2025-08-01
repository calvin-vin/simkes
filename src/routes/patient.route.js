import express from "express";
import { ensurePatient } from "../controllers/patient.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/ensure-patient",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatient
);

export default router;
