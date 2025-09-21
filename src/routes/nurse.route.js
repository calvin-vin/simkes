import express from "express";
import * as nurseController from "../controllers/nurse.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadNursePhoto } from "../middlewares/uploadNurse.js";

const router = express.Router();

// Public routes
router.get("/public", nurseController.getAllActiveNursesController);
router.get("/public/:id", nurseController.getActiveNurseByIdController);

router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

// Nurse routes
router.get("/stats", nurseController.getNurseStatsController);
router.get("/", nurseController.getAllNursesController);
router.get("/:id", nurseController.getNurseByIdController);
router.post(
  "/",
  uploadNursePhoto.single("photo"),
  nurseController.createNurseController
);
router.patch(
  "/:id",
  uploadNursePhoto.single("photo"),
  nurseController.updateNurseController
);
router.delete("/:id", nurseController.deleteNurseController);

// Nurse routes only - rating and schedule routes moved to separate files

export default router;
