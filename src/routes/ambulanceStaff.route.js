import express from "express";
import { ensureAmbulanceStaff } from "../controllers/ambulanceStaff.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/ensure-ambulance-staff",
  protect,
  restrictToRoleSubrole([
    { role: "AMBULANCE STAFF", subrole: "AMBULANCE STAFF" },
  ]),
  ensureAmbulanceStaff
);

export default router;
