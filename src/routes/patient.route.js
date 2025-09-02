import express from "express";
import {
  ensurePatient,
  getPatient,
  updatePatient,
} from "../controllers/patient.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);
router.use(
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }])
); // nanti diganti menjadi PATIENT

router.post("/ensure-patient", ensurePatient);

// Mendapatkan data pasien berdasarkan ID
router.get("/me", getPatient);

// Memperbarui data pasien berdasarkan ID
router.patch("/me", updatePatient);

export default router;
