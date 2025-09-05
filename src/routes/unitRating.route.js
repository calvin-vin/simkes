import express from "express";
import {
  createUnitRatingController,
  getAllUnitRatingsController,
  getUnitRatingByIdController,
  getUnitRatingByReservationIdController,
} from "../controllers/unitRating.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();
router.use(protect);

router.post(
  "/",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createUnitRatingController
);

router.get(
  "/reservation/:reservationId",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getUnitRatingByReservationIdController
);

router.get("/", getAllUnitRatingsController);
router.get("/:id", getUnitRatingByIdController);

export default router;