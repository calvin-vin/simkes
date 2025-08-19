import express from "express";
import {
  getAllKamar,
  getAllKelas,
  getAllRuangan,
  getAllStatusBed,
  getKamarwithTempatTidur,
  getKamarwithTempatTidurById,
  getKetersediaanTempatTidur,
  getKetersediaanTempatTidurById,
  getSummaryKetersediaanTempatTidur,
} from "../controllers/bed.controller.js";

const router = express.Router();

router.get("/summary", getSummaryKetersediaanTempatTidur);
router.get("/kamar-with-tempat-tidur", getKamarwithTempatTidur);
router.get("/kamar-with-tempat-tidur/:id", getKamarwithTempatTidurById);
router.get("/status", getAllStatusBed);
router.get("/kelas", getAllKelas);
router.get("/kamar", getAllKamar);
router.get("/ruangan", getAllRuangan);
router.get("/", getKetersediaanTempatTidur);
router.get("/:id", getKetersediaanTempatTidurById);

export default router;
