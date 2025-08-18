import {
  bedClassCollection,
  bedCollection,
  bedKamarCollection,
  bedRuanganCollection,
  bedStatusCollection,
  kamarWithBedCollection,
} from "../resources/bed.resource.js";
import {
  getAllKamarSchema,
  getAllKelasSchema,
  getAllRuanganSchema,
  getAllStatusBedSchema,
  getKetersediaanTempatTidurSchema,
} from "../schemas/bed.schema.js";
import * as bedService from "../services/bed.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

export const getKetersediaanTempatTidur = catchAsync(async (req, res) => {
  const query = getKetersediaanTempatTidurSchema.parse(req.query);

  const beds = await bedService.getKetersediaanTempatTidur(query);

  return apiSuccess(res, 200, "Ketersediaan tempat tidur berhasil diambil", {
    results: bedCollection(beds.results),
    pagination: beds.pagination,
  });
});

export const getSummaryKetersediaanTempatTidur = catchAsync(
  async (req, res) => {
    const query = getKetersediaanTempatTidurSchema.partial().parse(req.query);

    const summary = await bedService.getSummaryTempatTidur(query);

    return apiSuccess(
      res,
      200,
      "Summary ketersediaan tempat tidur berhasil diambil",
      summary
    );
  }
);

export const getKetersediaanTempatTidurWithSummary = catchAsync(
  async (req, res) => {
    const query = getKetersediaanTempatTidurSchema.partial().parse(req.query);

    const summary = await bedService.getKetersediaanTempatTidurWithSummary(
      query
    );

    return apiSuccess(
      res,
      200,
      "Ketersediaan tempat tidur dengan summary berhasil diambil",
      {
        results: kamarWithBedCollection(summary.results),
        pagination: summary.pagination,
      }
    );
  }
);

export const getAllStatusBed = catchAsync(async (req, res) => {
  const query = getAllStatusBedSchema.parse(req.query);

  const bedStatus = await bedService.getAllStatusBed(query);

  return apiSuccess(res, 200, "Status tempat tidur berhasil diambil", {
    results: bedStatusCollection(bedStatus.results),
    pagination: bedStatus.pagination,
  });
});

export const getAllKelas = catchAsync(async (req, res) => {
  const query = getAllKelasSchema.parse(req.query);

  const kelas = await bedService.getAllKelas(query);

  return apiSuccess(res, 200, "Kelas tempat tidur berhasil diambil", {
    results: bedClassCollection(kelas.results),
    pagination: kelas.pagination,
  });
});

export const getAllKamar = catchAsync(async (req, res) => {
  const query = getAllKamarSchema.parse(req.query);

  const kamar = await bedService.getAllKamar(query);

  return apiSuccess(res, 200, "Kamar tempat tidur berhasil diambil", {
    results: bedKamarCollection(kamar.results),
    pagination: kamar.pagination,
  });
});

export const getAllRuangan = catchAsync(async (req, res) => {
  const query = getAllRuanganSchema.parse(req.query);

  const ruangan = await bedService.getAllRuangan(query);

  return apiSuccess(res, 200, "Ruangan tempat tidur berhasil diambil", {
    results: bedRuanganCollection(ruangan.results),
    pagination: ruangan.pagination,
  });
});
