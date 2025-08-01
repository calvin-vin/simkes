import express from "express";
import {
  createPaymentMethod,
  deletePaymentMethod,
  getAllPaymentMethods,
  getPaymentMethodById,
  updatePaymentMethod,
} from "../controllers/paymentMethod.controller.js";
import { protect, restrictToRoleSubrole } from "../middlewares/auth.js";

const router = express.Router();

router.post(
  "/",
  protect,
  restrictToRoleSubrole([{ role: "OPERATOR", subrole: "OPERATOR" }]),
  createPaymentMethod
);
router.put(
  "/:id",
  protect,
  restrictToRoleSubrole([{ role: "OPERATOR", subrole: "OPERATOR" }]),
  updatePaymentMethod
);
router.delete(
  "/:id",
  protect,
  restrictToRoleSubrole([{ role: "OPERATOR", subrole: "OPERATOR" }]),
  deletePaymentMethod
);
router.get("/", getAllPaymentMethods);
router.get("/:id", getPaymentMethodById);

export default router;
