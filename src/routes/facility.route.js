import express from "express";
import {
  getAllFacilitiesController,
  getFacilityByIdController,
  createFacilityController,
  updateFacilityController,
  deleteFacilityController,
  addFacilityPhotoController,
  deleteFacilityPhotoController,
  getAllPublicFacilitiesController,
  getPublicFacilityByIdController,
} from "../controllers/facility.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadFacilityPhoto } from "../middlewares/uploadFacility.js";

const router = express.Router();

// Public routes - accessible to all authenticated users
router.get("/public/", getAllPublicFacilitiesController);
router.get("/public/:id", getPublicFacilityByIdController);

router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

// Admin routes - restricted to super admin
router.get("/", getAllFacilitiesController);
router.get("/:id", getFacilityByIdController);
router.post("/", createFacilityController);
router.patch("/:id", updateFacilityController);
router.delete("/:id", deleteFacilityController);

// Photo management routes
router.post(
  "/:id/photos",
  uploadFacilityPhoto.single("photo"),
  addFacilityPhotoController
);
router.delete("/:facilityId/photos/:photoId", deleteFacilityPhotoController);

export default router;
