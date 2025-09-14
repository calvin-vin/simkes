import { simkesPrisma } from "../config/db.js";
import fs from "fs/promises";
import path from "path";
import { saveFile } from "../utils/saveFile.js";
import ApiError from "../utils/apiError.js";

/**
 * Membuat banner baru
 * @param {Object} data - Data banner yang akan dibuat
 * @param {Object} photoFile - File gambar banner
 * @returns {Promise<Object>} Banner yang telah dibuat
 */
export const createBanner = async (data, photoFile) => {
  // Jika order tidak disediakan, tempatkan di urutan terakhir
  if (data.order === undefined) {
    const lastBanner = await simkesPrisma.banner.findFirst({
      orderBy: {
        order: "desc",
      },
    });

    data.order = lastBanner ? lastBanner.order + 1 : 0;
  }

  // Jika ada file gambar, proses dan tambahkan imageUrl
  if (photoFile) {
    // Simpan file
    const savedFilePath = await saveFile({
      buffer: photoFile.buffer,
      baseFolder: "public",
      subFolder: path.join("banners"),
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL untuk gambar
    data.imageUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  return simkesPrisma.banner.create({
    data,
  });
};

/**
 * Mendapatkan semua banner dengan filter dan pagination
 * @param {Object} filter - Filter untuk banner
 * @returns {Promise<Object>} Banner dengan pagination
 */
export const getAllBanners = async (filter) => {
  const { page, limit, isActive, sortBy, sortOrder } = filter;
  const skip = (page - 1) * limit;

  // Buat filter untuk query
  const where = {};
  if (isActive) {
    where.isActive = isActive === "true";
  }

  // Buat orderBy untuk query
  const orderBy = {};
  orderBy[sortBy] = sortOrder;

  // Hitung total data
  const total = await simkesPrisma.banner.count({ where });

  // Ambil data dengan pagination
  const results = await simkesPrisma.banner.findMany({
    where,
    orderBy,
    skip,
    take: limit,
  });

  // Hitung total halaman
  const totalPages = Math.ceil(total / limit);

  return {
    results,
    pagination: {
      total,
      page,
      limit,
      totalPages,
    },
  };
};

/**
 * Mendapatkan banner berdasarkan ID
 * @param {string} id - ID banner
 * @returns {Promise<Object>} Banner yang ditemukan
 */
export const getBannerById = async (id) => {
  const banner = await simkesPrisma.banner.findUnique({
    where: { id },
  });

  if (!banner) {
    throw new ApiError("Banner tidak ditemukan", 404);
  }

  return banner;
};

/**
 * Mengupdate banner berdasarkan ID
 * @param {string} id - ID banner
 * @param {Object} data - Data banner yang akan diupdate
 * @param {Object} photoFile - File gambar baru (opsional)
 * @returns {Promise<Object>} Banner yang telah diupdate
 */
export const updateBanner = async (id, data, photoFile = null) => {
  // Cek apakah banner ada
  const existingBanner = await getBannerById(id);

  // Jika ada file gambar baru, proses dan update imageUrl
  if (photoFile) {
    // Simpan file baru
    const savedFilePath = await saveFile({
      buffer: photoFile.buffer,
      baseFolder: "public",
      subFolder: path.join("banners"),
      extension: path.extname(photoFile.originalname),
    });

    // Generate full URL untuk gambar
    data.imageUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;

    // Hapus file gambar lama jika ada
    if (existingBanner.imageUrl) {
      try {
        const oldImagePath = existingBanner.imageUrl.replace(
          `${process.env.HOST_URL}/`,
          ""
        );
        const oldFilePath = path.join("public", oldImagePath);
        await fs.unlink(oldFilePath).catch(() => {});
      } catch (error) {
        console.error("Error saat menghapus file gambar lama:", error);
        // Lanjutkan proses meskipun gagal menghapus file
      }
    }
  }

  return simkesPrisma.banner.update({
    where: { id },
    data,
  });
};

/**
 * Menghapus banner berdasarkan ID
 * @param {string} id - ID banner
 * @returns {Promise<Object>} Banner yang telah dihapus
 */
export const deleteBanner = async (id) => {
  // Cek apakah banner ada
  const banner = await getBannerById(id);

  // Hapus file gambar jika ada
  if (banner.imageUrl) {
    try {
      const imagePath = banner.imageUrl.replace(`${process.env.HOST_URL}/`, "");
      const filePath = path.join("public", imagePath);
      await fs.unlink(filePath).catch(() => {});
    } catch (error) {
      console.error("Error saat menghapus file gambar:", error);
      // Lanjutkan proses meskipun gagal menghapus file
    }
  }

  return simkesPrisma.banner.delete({
    where: { id },
  });
};

/**
 * Mengupdate urutan banner
 * @param {Array} bannerOrders - Array objek dengan id dan order baru
 * @returns {Promise<Array>} Banner yang telah diupdate
 */
export const updateBannerOrders = async (bannerOrders) => {
  // Gunakan transaksi untuk memastikan semua update berhasil
  return simkesPrisma.$transaction(
    bannerOrders.map((item) =>
      simkesPrisma.banner.update({
        where: { id: item.id },
        data: { order: item.order },
      })
    )
  );
};

/**
 * Mendapatkan banner aktif untuk ditampilkan di frontend
 * @returns {Promise<Array>} Banner aktif yang diurutkan
 */
export const getActiveBanners = async () => {
  return simkesPrisma.banner.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });
};

export const getActiveBannerById = async (id) => {
  const banner = await simkesPrisma.banner.findUnique({
    where: { id, isActive: true },
  });

  if (!banner) {
    throw new ApiError("Banner tidak ditemukan", 404);
  }

  return banner;
};
