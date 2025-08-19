import express from "express";
import {
  getDetailInformasiStok,
  getInformasiStok,
} from "../controllers/medicine.controller.js";

const router = express.Router();

router.get("/", getInformasiStok);
router.get("/:id", getDetailInformasiStok);

export default router;
