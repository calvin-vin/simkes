import express from "express";
import {
  getAllFacilitiesController,
  getFacilityByIdController,
  createFacilityController,
  updateFacilityController,
  deleteFacilityController,
  addFacilityPhotoController,
  deleteFacilityPhotoController,
} from "../controllers/facility.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadFacilityPhoto } from "../middlewares/uploadFacility.js";

const router = express.Router();

// router.use(protect);

// Public routes - accessible to all authenticated users
router.get("/", getAllFacilitiesController);
router.get("/:id", getFacilityByIdController);

// Admin routes - restricted to super admin
router.post(
  "/",
  // restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  createFacilityController
);

router.patch(
  "/:id",
  // restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  updateFacilityController
);

router.delete(
  "/:id",
  // restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  deleteFacilityController
);

// Photo management routes
router.post(
  "/:id/photos",
  // restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  uploadFacilityPhoto.single("photo"),
  addFacilityPhotoController
);

router.delete(
  "/:facilityId/photos/:photoId",
  // restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  deleteFacilityPhotoController
);

export default router;
