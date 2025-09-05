import express from "express";
import {
  createDoctorRatingController,
  getAllDoctorRatingsController,
  getDoctorRatingByIdController,
  getDoctorRatingByReservationIdController,
} from "../controllers/doctorRating.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();
router.use(protect);

router.post(
  "/",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createDoctorRatingController
);

router.get(
  "/reservation/:reservationId",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getDoctorRatingByReservationIdController
);

router.get("/", getAllDoctorRatingsController);
router.get("/:id", getDoctorRatingByIdController);

export default router;
