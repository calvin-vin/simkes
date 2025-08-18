import express from "express";
import {
  getAllPaymentMethods,
  getPaymentMethodById,
} from "../controllers/paymentMethod.controller.js";

const router = express.Router();

router.get("/", getAllPaymentMethods);
router.get("/:id", getPaymentMethodById);

export default router;
