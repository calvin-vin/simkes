import express from "express";
import {
  addGalleryPhotoController,
  createGalleryController,
  deleteGalleryController,
  deleteGalleryPhotoController,
  getAllGalleriesController,
  getGalleryByIdController,
  updateGalleryController,
} from "../controllers/gallery.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadGalleryPhoto } from "../middlewares/uploadGallery.js";

const router = express.Router();

// Public routes
router.get("/", getAllGalleriesController);
router.get("/:id", getGalleryByIdController);

// Admin routes
router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

router.post("/", createGalleryController);
router.patch("/:id", updateGalleryController);
router.delete("/:id", deleteGalleryController);

// Photo management routes
router.post(
  "/:id/photos",
  uploadGalleryPhoto.single("photo"),
  addGalleryPhotoController
);
router.delete("/:galleryId/photos/:photoId", deleteGalleryPhotoController);

export default router;
