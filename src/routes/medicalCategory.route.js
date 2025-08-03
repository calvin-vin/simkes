import express from "express";
import {
  getAllMedicalCategories,
  getMedicalCategoryById,
} from "../controllers/medicalCategory.controller.js";

const router = express.Router();

router.get("/", getAllMedicalCategories);
router.get("/:id", getMedicalCategoryById);

export default router;
