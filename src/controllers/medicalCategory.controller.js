import { medicalCategoryResource } from "../resources/medicalCategory.resource.js";
import { getAllMedicalCategoriesSchema } from "../schemas/medicalCategory.schema.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";
import * as medicalCategoryService from "../services/medicalCategory.service.js";

export const getMedicalCategoryById = catchAsync(async (req, res) => {
  const medicalCategory =
    await medicalCategoryService.findMedicalCategoryOrFail({
      medicalCategoryId: req.params.id,
    });

  return apiSuccess(
    res,
    200,
    "Medical category retrieved successfully",
    medicalCategoryResource(medicalCategory)
  );
});

export const getAllMedicalCategories = catchAsync(async (req, res) => {
  const query = getAllMedicalCategoriesSchema.parse(req.query);
  const medicalCategories =
    await medicalCategoryService.getAllMedicalCategories(query);

  return apiSuccess(res, 200, "Medical categories retrieved successfully", {
    results: medicalCategories.results.map((medicalCategory) =>
      medicalCategoryResource(medicalCategory)
    ),
    ...medicalCategories.pagination,
  });
});
