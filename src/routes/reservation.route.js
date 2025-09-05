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
  restrictToRoleSubrole([
    { role: "PATIENT", subrole: "PATIENT" },
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ]),
  getAllReservations
);
router.post(
  "/",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  createReservation
);
router.get(
  "/:id",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  getReservationById
);
router.patch(
  "/:id/cancel",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  cancelReservation
);
router.delete(
  "/:id",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  deleteReservation
);
router.post(
  "/:id/checkin",
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  checkinReservationController
);

// Route untuk update callStatus reservasi
// Hanya dapat diakses oleh operator dan superadmin
router.patch(
  "/:id/call-status",
  restrictToRoleSubrole([
    { role: "SUPER ADMIN", subrole: "SUPER ADMIN" },
    { role: "OPERATOR", subrole: "OPERATOR" },
  ]),
  updateCallStatusController
);

export default router;
