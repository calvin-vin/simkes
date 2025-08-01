import { paymentMethodResource } from "../resources/paymentMethod.resource.js";
import {
  getAllPaymentMethodSchema,
  paymentMethodSchema,
} from "../schemas/paymentMethod.schema.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";
import * as paymentMethodService from "../services/paymentMethod.service.js";

export const createPaymentMethod = catchAsync(async (req, res) => {
  const parsedBody = paymentMethodSchema.parse(req.body);

  const paymentMethod = await paymentMethodService.createPaymentMethod({
    name: parsedBody.name,
  });

  return apiSuccess(
    res,
    201,
    "Payment method created successfully",
    paymentMethodResource(paymentMethod)
  );
});

export const updatePaymentMethod = catchAsync(async (req, res) => {
  const parsedBody = paymentMethodSchema.parse(req.body);

  const paymentMethod = await paymentMethodService.updatePaymentMethod(
    req.params.id,
    {
      name: parsedBody.name,
    }
  );

  return apiSuccess(
    res,
    200,
    "Payment method upddated successfully",
    paymentMethodResource(paymentMethod)
  );
});

export const deletePaymentMethod = catchAsync(async (req, res) => {
  await paymentMethodService.deletePaymentMethod(req.params.id);

  return apiSuccess(res, 200, "Payment method deleted successfully");
});

export const getPaymentMethodById = catchAsync(async (req, res) => {
  const paymentMethod = await paymentMethodService.getPaymentMethodById(
    req.params.id
  );

  return apiSuccess(
    res,
    200,
    "Payment method found successfully",
    paymentMethodResource(paymentMethod)
  );
});

export const getAllPaymentMethods = catchAsync(async (req, res) => {
  const query = getAllPaymentMethodSchema.parse(req.query);
  const paymentMethods = await paymentMethodService.getAllPaymentMethods(query);

  return apiSuccess(res, 200, "Payment methods found successfully", {
    results: paymentMethods.results.map((paymentMethod) =>
      paymentMethodResource(paymentMethod)
    ),
    ...paymentMethods,
  });
});
