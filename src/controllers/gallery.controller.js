import {
  galleriesResource,
  galleryResource,
} from "../resources/gallery.resource.js";
import {
  galleryFilterSchema,
  gallerySchema,
} from "../schemas/gallery.schema.js";
import { galleryService } from "../services/gallery.service.js";
import apiSuccess from "../utils/apiSuccess.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Controller untuk mendapatkan semua gallery
 */
export const getAllGalleriesController = catchAsync(async (req, res) => {
  const query = galleryFilterSchema.parse(req.query);
  const galleries = await galleryService.getAllGalleries(query);

  return apiSuccess(
    res,
    200,
    "Daftar gallery berhasil diambil",
    galleriesResource(galleries)
  );
});

/**
 * Controller untuk mendapatkan gallery berdasarkan ID
 */
export const getGalleryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const gallery = await galleryService.getGalleryById(id);

  return apiSuccess(
    res,
    200,
    "Detail gallery berhasil diambil",
    galleryResource(gallery)
  );
});

/**
 * Controller untuk membuat gallery baru
 */
export const createGalleryController = catchAsync(async (req, res) => {
  const parsedBody = gallerySchema.parse(req.body);

  const gallery = await galleryService.createGallery(parsedBody);

  return apiSuccess(
    res,
    201,
    "Gallery berhasil disimpan",
    galleryResource(gallery)
  );
});

/**
 * Controller untuk mengupdate gallery
 */
export const updateGalleryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = gallerySchema.parse(req.body);

  const gallery = await galleryService.updateGallery(id, parsedBody);

  return apiSuccess(
    res,
    200,
    "Gallery berhasil diperbarui",
    galleryResource(gallery)
  );
});

/**
 * Controller untuk menghapus gallery
 */
export const deleteGalleryController = catchAsync(async (req, res) => {
  const { id } = req.params;

  await galleryService.deleteGallery(id);

  return apiSuccess(res, 200, "Gallery berhasil dihapus", null);
});

/**
 * Controller untuk menambahkan foto ke gallery
 */
export const addGalleryPhotoController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const photoFile = req.file;

  const photo = await galleryService.addGalleryPhoto(id, photoFile);

  return apiSuccess(res, 201, "Foto gallery berhasil ditambahkan", photo);
});

/**
 * Controller untuk menghapus foto gallery
 */
export const deleteGalleryPhotoController = catchAsync(async (req, res) => {
  const { photoId } = req.params;

  await galleryService.deleteGalleryPhoto(photoId);

  return apiSuccess(res, 200, "Foto gallery berhasil dihapus", null);
});

export const galleryController = {
  getAllGalleriesController,
  getGalleryByIdController,
  createGalleryController,
  updateGalleryController,
  deleteGalleryController,
  addGalleryPhotoController,
  deleteGalleryPhotoController,
};