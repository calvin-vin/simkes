import express from "express";
import * as nurseScheduleController from "../controllers/nurseSchedule.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();
router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

// Nurse schedule routes
router.get("/", nurseScheduleController.getAllNurseSchedulesController);
router.get("/:id", nurseScheduleController.getNurseScheduleByIdController);
router.get(
  "/nurse/:nurseId",
  nurseScheduleController.getNurseSchedulesByNurseIdController
);
router.post("/", nurseScheduleController.createNurseScheduleController);
router.patch("/:id", nurseScheduleController.updateNurseScheduleController);
router.delete("/:id", nurseScheduleController.deleteNurseScheduleController);

export default router;