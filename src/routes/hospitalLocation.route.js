import express from "express";
import {
  getHospitalLocationController,
  saveHospitalLocationController,
} from "../controllers/hospitalLocation.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);

router.get("/", getHospitalLocationController);
router.post(
  "/",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  saveHospitalLocationController
);

export default router;
