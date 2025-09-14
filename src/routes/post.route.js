import express from "express";
import {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
  getAllPublicPostsController,
  getPublicPostByIdController,
} from "../controllers/post.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadPostPhoto } from "../middlewares/uploadPost.js";

const router = express.Router();

// Public routes
router.get("/public/", getAllPublicPostsController);
router.get("/public/:id", getPublicPostByIdController);

// Admin routes - restricted to super admin
router.use(
  protect,
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ])
);

router.get("/", getAllPostsController);
router.get("/:id", getPostByIdController);
router.post("/", uploadPostPhoto.single("photo"), createPostController);
router.patch("/:id", uploadPostPhoto.single("photo"), updatePostController);
router.delete("/:id", deletePostController);

export default router;
