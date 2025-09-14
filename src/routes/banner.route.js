import express from "express";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadBannerImage } from "../middlewares/uploadBanner.js";
import {
  createBannerController,
  getAllBannersController,
  getBannerByIdController,
  updateBannerController,
  deleteBannerController,
  updateBannerOrdersController,
  getActiveBannersController,
  getActiveBannerByIdController,
} from "../controllers/banner.controller.js";

const router = express.Router();

// Public routes
router.get("/public", getActiveBannersController);
router.get("/public/:id", getActiveBannerByIdController);

// Route untuk admin
router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

// CRUD banner
router.post("/", uploadBannerImage.single("image"), createBannerController);
router.get("/", getAllBannersController);
router.get("/:id", getBannerByIdController);
router.patch("/order/update", updateBannerOrdersController);
router.patch("/:id", uploadBannerImage.single("image"), updateBannerController);
router.delete("/:id", deleteBannerController);

export default router;
