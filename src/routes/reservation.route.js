import express from "express";
import {
  createReservation,
  getAllReservations,
  getReservationById,
  deleteReservation,
  cancelReservation,
  checkinReservationController,
} from "../controllers/reservation.controller.js";
import { updateCallStatusController } from "../controllers/updateCallStatus.controller.js";
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

router.post(
  "/:id/checkin",
  restrictToRoleSubrole([{ role: "SUPER ADMIN", subrole: "SUPER ADMIN" }]),
  checkinReservationController
);

// Route untuk update callStatus reservasi
// Hanya dapat diakses oleh operator dan superadmin
router.patch(
  "/:id/call-status",
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" }
  ]),
  updateCallStatusController
);

export default router;
