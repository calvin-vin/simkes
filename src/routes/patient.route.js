import express from "express";
import {
  ensurePatient,
  getAllPatients,
  getPatient,
  getPatientByIdentity,
  updatePatient,
} from "../controllers/patient.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);

// For patient
router.post(
  "/ensure-patient",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatient
);
router.get(
  "/me",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getPatient
);
router.patch(
  "/me",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  updatePatient
);

// Route untuk operator dan super admin
router.get(
  "/",
  protect,
  restrictToRoleSubrole([
    { role: "OPERATOR", subrole: "OPERATOR" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
  ]),
  getAllPatients
);

router.get(
  "/:identity",
  protect,
  restrictToRoleSubrole([
    { role: "OPERATOR", subrole: "OPERATOR" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
  ]),
  getPatientByIdentity
);

export default router;
