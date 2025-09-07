import express from "express";
import {
  assignEmergency,
  createEmergency,
  getAllEmergencies,
  getEmergencyById,
  updateEmergencyStatus,
} from "../controllers/emergency.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createEmergency
);

router.get(
  "/",
  protect,
  restrictToRoleSubrole([
    { role: "PATIENT", subrole: "PATIENT" },
    { role: "OPERATOR", subrole: "OPERATOR" },
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
  ]),
  getAllEmergencies
);
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
