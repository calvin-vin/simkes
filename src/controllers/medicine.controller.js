import {
  medicineCollection,
  medicineResource,
} from "../resources/medicine.resource.js";
import { getMedicineSchema } from "../schemas/medicine.schema.js";
import * as medicineService from "../services/medicine.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllMedicines = catchAsync(async (req, res) => {
  const query = getMedicineSchema.parse(req.query);

  const medicines = await medicineService.getAllMedicines(query);

  return apiSuccess(res, 200, "Medicines retrieved successfully", {
    results: medicineCollection(medicines.results),
    pagination: medicines.pagination,
  });
});

export const getMedicineById = catchAsync(async (req, res) => {
  const medicines = await medicineService.getMedicineById(req.params.id);

  return apiSuccess(
    res,
    200,
    "Medicine retrieved successfully",
    medicineResource(medicines)
  );
});
