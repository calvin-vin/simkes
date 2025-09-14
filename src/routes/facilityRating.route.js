import express from "express";
import {
  createFacilityRatingController,
  getAllFacilityRatingsController,
  getFacilityRatingByIdController,
  getFacilityRatingByReservationIdController,
  getAverageRatingByFacilityIdController
} from "../controllers/facilityRating.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();
router.use(protect);

router.post(
  "/",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createFacilityRatingController
);

router.get(
  "/reservation/:reservationId",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getFacilityRatingByReservationIdController
);

router.get(
  "/facility/:facilityId/average",
  getAverageRatingByFacilityIdController
);

router.get("/", getAllFacilityRatingsController);
router.get("/:id", getFacilityRatingByIdController);

export default router;