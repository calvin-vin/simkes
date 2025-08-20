import {
  policlinicCollection,
  policlinicResource,
} from "../resources/policlinic.resource.js";
import { getPoliclinicSchema } from "../schemas/policlinic.schema.js";
import * as policlinicService from "../services/policlinic.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllPolyclinics = catchAsync(async (req, res) => {
  const query = getPoliclinicSchema.parse(req.query);

  const policlinics = await policlinicService.getAllPolyclinics(query);

  return apiSuccess(res, 200, "Policlinics retrieved successfully", {
    results: policlinicCollection(policlinics.results),
    pagination: policlinics.pagination,
  });
});

export const getPolyclinicById = catchAsync(async (req, res) => {
  const poli = await policlinicService.getPolyclinicById(req.params.id);

  return apiSuccess(
    res,
    200,
    "Policlinic retrieved successfully",
    policlinicResource(poli)
  );
});
