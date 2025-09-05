import express from "express";
import { getAllUnits, getUnitById } from "../controllers/unit.controller.js";

const router = express.Router();

router.get("/", getAllUnits);
router.get("/:id", getUnitById);

export default router;
