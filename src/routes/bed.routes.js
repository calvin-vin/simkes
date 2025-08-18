import express from "express";
import {
  getAllKamar,
  getAllKelas,
  getAllRuangan,
  getAllStatusBed,
  getKetersediaanTempatTidur,
  getKetersediaanTempatTidurWithSummary,
  getSummaryKetersediaanTempatTidur,
} from "../controllers/bed.controller.js";

const router = express.Router();

router.get("/", getKetersediaanTempatTidur);
router.get("/summary", getSummaryKetersediaanTempatTidur);
router.get("/with-summary", getKetersediaanTempatTidurWithSummary);
router.get("/status", getAllStatusBed);
router.get("/kelas", getAllKelas);
router.get("/kamar", getAllKamar);
router.get("/ruangan", getAllRuangan);

export default router;
