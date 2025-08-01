import { paymentMethodResource } from "../resources/paymentMethod.resource.js";
import {
  getAllPaymentMethodSchema,
  paymentMethodSchema,
} from "../schemas/paymentMethod.schema.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";
import * as paymentMethodService from "../services/paymentMethod.service.js";
import {
  getAllPatientPaymentSchema,
  patientPaymentSchema,
  updatePatientPaymentSchema,
} from "../schemas/patientPayment.schema.js";
import * as patientPaymentService from "../services/patientPayment.service.js";
import { patientPaymentResource } from "../resources/patientPayment.resource.js";

export const createPatientPayment = catchAsync(async (req, res) => {
  const parsedBody = patientPaymentSchema.parse(req.body);

  let paymentFile = null;
  if (req.file) {
    paymentFile = req.file;
  }

  const patientPayment = await patientPaymentService.createPatientPayment({
    ...parsedBody,
    paymentFile,
    patientId: req.user.id,
  });

  return apiSuccess(
    res,
    201,
    "Patient payment created successfully",
    patientPaymentResource(patientPayment)
  );
});

export const getAllPatientPayments = catchAsync(async (req, res) => {
  const query = getAllPatientPaymentSchema.parse(req.query);
  const patientPayments = await patientPaymentService.getAllPatientPayments({
    patientId: req.user.id,
    query,
  });

  return apiSuccess(res, 200, "Patient payments retrieved successfully", {
    results: patientPayments.results.map((patientPayment) =>
      patientPaymentResource(patientPayment)
    ),
    ...patientPayments.pagination,
  });
});

export const getPatientPaymentById = catchAsync(async (req, res) => {
  const patientPayment = await patientPaymentService.getPatientPaymentById({
    id: req.params.id,
    patientId: req.user.id,
  });

  return apiSuccess(
    res,
    200,
    "Patient payment retrieved successfully",
    patientPaymentResource(patientPayment)
  );
});

export const updatePatientPayment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = updatePatientPaymentSchema.parse(req.body);

  const paymentFile = req.file || null;

  const updated = await patientPaymentService.updatePatientPayment({
    id,
    patientId: req.user.id,
    ...parsedBody,
    paymentFile,
  });

  return apiSuccess(
    res,
    200,
    "Patient payment updated successfully",
    patientPaymentResource(updated)
  );
});

export const deletePatientPayment = catchAsync(async (req, res) => {
  const { id } = req.params;

  await patientPaymentService.deletePatientPayment({
    id,
    patientId: req.user.id,
  });

  return apiSuccess(res, 200, "Patient payment deleted successfully");
});
