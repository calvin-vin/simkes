import express from "express";
import {
  createReservation,
  getAllReservations,
  getReservationById,
  deleteReservation,
  cancelReservation,
} from "../controllers/reservation.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);

// Reservation routes
router.get(
  "/",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  getAllReservations
);
router.post(
  "/",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  createReservation
);
router.get(
  "/:id",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  getReservationById
);
router.patch(
  "/:id/cancel",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  cancelReservation
);
router.delete(
  "/:id",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  deleteReservation
);

export default router;
