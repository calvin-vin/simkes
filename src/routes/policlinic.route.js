import express from "express";
import {
  getAllPolyclinics,
  getPolyclinicById,
} from "../controllers/policlinic.controller.js";

const router = express.Router();

router.get("/", getAllPolyclinics);
router.get("/:id", getPolyclinicById);

export default router;
