import express from "express";
import {
  createNurseRatingController,
  getAllNurseRatingsController,
  getNurseRatingByIdController,
  getNurseRatingByReservationIdController,
  getAverageRatingByNurseIdController
} from "../controllers/nurseRating.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();
router.use(protect);

router.post(
  "/",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createNurseRatingController
);

router.get(
  "/reservation/:reservationId",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getNurseRatingByReservationIdController
);

router.get(
  "/nurse/:nurseId/average",
  getAverageRatingByNurseIdController
);

router.get("/", getAllNurseRatingsController);
router.get("/:id", getNurseRatingByIdController);

export default router;
