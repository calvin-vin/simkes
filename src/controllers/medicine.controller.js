import {
  medicineCollection,
  medicineResource,
} from "../resources/medicine.resource.js";
import { getInformasiStokSchema } from "../schemas/medicine.schema.js";
import * as medicineService from "../services/medicine.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getInformasiStok = catchAsync(async (req, res) => {
  const query = getInformasiStokSchema.parse(req.query);

  const medicines = await medicineService.getAllProductWithQuantity(query);

  return apiSuccess(res, 200, "Informasi stok obat berhasil diambil", {
    results: medicineCollection(medicines.results),
    pagination: medicines.pagination,
  });
});

export const getDetailInformasiStok = catchAsync(async (req, res) => {
  const medicines = await medicineService.getProductById(req.params.id);

  return apiSuccess(
    res,
    200,
    "Detail informasi stok obat berhasil diambil",
    medicineResource(medicines)
  );
});
