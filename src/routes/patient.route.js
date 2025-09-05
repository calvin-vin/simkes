import express from "express";
import {
  ensurePatient,
  getPatient,
  updatePatient,
} from "../controllers/patient.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);
router.use(restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]));

router.post("/ensure-patient", ensurePatient);
router.get("/me", getPatient);
router.patch("/me", updatePatient);

export default router;
