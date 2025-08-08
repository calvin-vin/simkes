import express from "express";
import {
  createPaymentMethod,
  deletePaymentMethod,
  getAllPaymentMethods,
  getPaymentMethodById,
  updatePaymentMethod,
} from "../controllers/paymentMethod.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";
import { uploadPaymentFile } from "../middlewares/upload.js";
import {
  createPatientPayment,
  deletePatientPayment,
  getAllPatientPayments,
  getPatientPaymentById,
  updatePatientPayment,
} from "../controllers/patientPayment.controller.js";
import { ensurePatientMiddleware } from "../middlewares/ensurePatient.js";

const router = express.Router();

router.get(
  "/",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  getAllPatientPayments
);

router.get(
  "/:id",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  getPatientPaymentById
);

router.post(
  "/",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  uploadPaymentFile.single("paymentFile"),
  createPatientPayment
);

router.patch(
  "/:id",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  uploadPaymentFile.single("paymentFile"),
  updatePatientPayment
);

router.delete(
  "/:id",
  protect,
  restrictToRoleSubrole([{ role: "PATIENT", subrole: "PATIENT" }]),
  ensurePatientMiddleware,
  deletePatientPayment
);

export default router;
