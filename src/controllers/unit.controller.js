import { unitCollection, unitResource } from "../resources/unit.resource.js";
import { getUnitSchema } from "../schemas/unit.schema.js";
import * as unitService from "../services/unit.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllUnits = catchAsync(async (req, res) => {
  const query = getUnitSchema.parse(req.query);

  const units = await unitService.getAllUnits(query);

  return apiSuccess(res, 200, "Data unit berhasil diambil", {
    results: unitCollection(units.results),
    pagination: units.pagination,
  });
});

export const getUnitById = catchAsync(async (req, res) => {
  const unit = await unitService.getUnitById(req.params.id);

  return apiSuccess(res, 200, "Data unit berhasil diambil", unitResource(unit));
});
