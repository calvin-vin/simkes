import express from "express";
import {
  assignEmergency,
  createEmergency,
  getAllEmergencies,
  getEmergencyById,
  updateEmergencyStatus,
} from "../controllers/emergency.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { ensurePatientMiddleware } from "../middlewares/ensurePatient.js";

const router = express.Router();

router.post(
  "/emergencies",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  createEmergency
);

router.get("/", protect, getAllEmergencies);
router.get("/:id", protect, getEmergencyById);
router.patch(
  "/:id/assign",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  assignEmergency
);

router.patch(
  "/:id/status",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  updateEmergencyStatus
);

export default router;
