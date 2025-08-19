import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const getAllProductWithQuantity = async (query) => {
  const { namaproduk, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    statusenabled: true,
    ...(namaproduk
      ? { namaproduk: { contains: namaproduk, mode: "insensitive" } }
      : {}),
    stokDetails: {
      some: {}, // hanya produk yg punya stok
    },
  };

  const orderBy = {};
  if (sortBy && ["id", "namaproduk"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [products, total] = await Promise.all([
    simrsPrisma.produk.findMany({
      where: filters,
      include: {
        stokDetails: {
          select: {
            qtyproduk: true,
            tglkadaluarsa: true,
            ruangan: {
              select: {
                id: true,
                namaruangan: true,
              },
            },
          },
        },
      },
      skip: (page - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.produk.count({
      where: filters,
    }),
  ]);

  const results = products.map((p) => {
    const totalQuantity = p.stokDetails.reduce(
      (sum, s) => sum + (s.qtyproduk || 0),
      0
    );

    const nearestExpired =
      p.stokDetails
        .filter((s) => s.tglkadaluarsa)
        .sort(
          (a, b) =>
            new Date(a.tglkadaluarsa).getTime() -
            new Date(b.tglkadaluarsa).getTime()
        )[0]?.tglkadaluarsa || null;

    return {
      ...p,
      totalQuantity,
      nearestExpired,
    };
  });

  return {
    results,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getProductById = async (id) => {
  const product = await simrsPrisma.produk.findUnique({
    where: { id: Number(id), statusenabled: true },
    include: {
      stokDetails: {
        select: {
          qtyproduk: true,
          tglkadaluarsa: true,
          ruangan: {
            select: {
              id: true,
              namaruangan: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    throw new ApiError("Obat tidak ditemukan", 404);
  }

  const totalQuantity = product.stokDetails.reduce(
    (sum, s) => sum + (s.qtyproduk || 0),
    0
  );

  const nearestExpired =
    product.stokDetails
      .filter((s) => s.tglkadaluarsa)
      .sort(
        (a, b) =>
          new Date(a.tglkadaluarsa).getTime() -
          new Date(b.tglkadaluarsa).getTime()
      )[0]?.tglkadaluarsa || null;

  return {
    ...product,
    totalQuantity,
    nearestExpired,
  };
};
