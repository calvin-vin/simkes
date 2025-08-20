import express from "express";
import {
  getAllMedicines,
  getMedicineById,
} from "../controllers/medicine.controller.js";

const router = express.Router();

router.get("/", getAllMedicines);
router.get("/:id", getMedicineById);

export default router;
