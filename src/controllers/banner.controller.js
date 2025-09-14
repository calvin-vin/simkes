import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";
import * as bannerService from "../services/banner.service.js";
import * as bannerResource from "../resources/banner.resource.js";
import {
  bannerSchema,
  updateBannerSchema,
  bannerFilterSchema,
  updateBannerOrderSchema,
} from "../schemas/banner.schema.js";

/**
 * Controller untuk membuat banner baru
 */
export const createBannerController = catchAsync(async (req, res) => {
  const validatedData = bannerSchema.parse(req.body);
  const photoFile = req.file;

  const banner = await bannerService.createBanner(validatedData, photoFile);

  return apiSuccess(
    res,
    201,
    "Banner berhasil dibuat",
    bannerResource.bannerResource(banner)
  );
});

/**
 * Controller untuk mendapatkan semua banner dengan filter dan pagination
 */
export const getAllBannersController = catchAsync(async (req, res) => {
  // Validasi filter
  const filter = bannerFilterSchema.parse(req.query);

  // Ambil data banner
  const banners = await bannerService.getAllBanners(filter);

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Banner berhasil diambil",
    bannerResource.bannersResource(banners)
  );
});

/**
 * Controller untuk mendapatkan banner berdasarkan ID
 */
export const getBannerByIdController = catchAsync(async (req, res) => {
  // Ambil banner berdasarkan ID
  const banner = await bannerService.getBannerById(req.params.id);

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Banner berhasil diambil",
    bannerResource.bannerResource(banner)
  );
});

/**
 * Controller untuk mengupdate banner berdasarkan ID
 */
export const updateBannerController = catchAsync(async (req, res) => {
  // Validasi input
  const validatedData = updateBannerSchema.parse(req.body);
  const photoFile = req.file;

  // Update banner
  const banner = await bannerService.updateBanner(
    req.params.id,
    validatedData,
    photoFile
  );

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Banner berhasil diupdate",
    bannerResource.bannerResource(banner)
  );
});

/**
 * Controller untuk menghapus banner berdasarkan ID
 */
export const deleteBannerController = catchAsync(async (req, res) => {
  // Hapus banner
  await bannerService.deleteBanner(req.params.id);

  // Kirim response
  return apiSuccess(res, 200, "Banner berhasil dihapus", null);
});

/**
 * Controller untuk mengupdate urutan banner
 */
export const updateBannerOrdersController = catchAsync(async (req, res) => {
  // Validasi input
  const validatedData = updateBannerOrderSchema.parse(req.body);

  // Update urutan banner
  const banners = await bannerService.updateBannerOrders(
    validatedData.bannerOrders
  );

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Urutan banner berhasil diupdate",
    banners.map((banner) => bannerResource.bannerResource(banner))
  );
});

/**
 * Controller untuk mendapatkan banner aktif untuk frontend
 */
export const getActiveBannersController = catchAsync(async (req, res) => {
  // Ambil banner aktif
  const banners = await bannerService.getActiveBanners();

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Banner aktif berhasil diambil",
    banners.map((banner) => bannerResource.bannerResource(banner))
  );
});

/**
 * Controller untuk mendapatkan banner aktif berdasarkan ID untuk frontend
 */
export const getActiveBannerByIdController = catchAsync(async (req, res) => {
  // Ambil banner aktif berdasarkan ID
  const banner = await bannerService.getActiveBannerById(req.params.id);

  // Kirim response
  return apiSuccess(
    res,
    200,
    "Banner aktif berhasil diambil",
    bannerResource.bannerResource(banner)
  );
});
