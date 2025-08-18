import { paymentMethodResource } from "../resources/paymentMethod.resource.js";
import { getAllPaymentMethodSchema } from "../schemas/paymentMethod.schema.js";
import * as paymentMethodService from "../services/paymentMethod.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getPaymentMethodById = catchAsync(async (req, res) => {
  const paymentMethod = await paymentMethodService.getPaymentMethodById(
    req.params.id
  );

  return apiSuccess(
    res,
    200,
    "Payment method retrieved successfully",
    paymentMethodResource({
      results: paymentMethod.results.map((paymentMethod) =>
        paymentMethodResource(paymentMethod)
      ),
      ...paymentMethod.pagination,
    })
  );
});

export const getAllPaymentMethods = catchAsync(async (req, res) => {
  const query = getAllPaymentMethodSchema.parse(req.query);
  const paymentMethods = await paymentMethodService.getAllPaymentMethods(query);

  return apiSuccess(
    res,
    200,
    "Payment methods retrieved successfully",
    paymentMethods
  );
});
