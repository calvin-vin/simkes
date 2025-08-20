import { simrsPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const getAllMedicines = async (query) => {
  const { productName, page = 1, limit = 10, sortBy, sortOrder } = query;

  const filters = {
    isEnabled: true,
    ...(productName
      ? { productName: { contains: productName, mode: "insensitive" } }
      : {}),
    stockDetails: {
      some: {}, // only products that have stock
    },
  };

  const orderBy = {};
  if (sortBy && ["id", "productName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["id"] = "asc";
  }

  const [products, total] = await Promise.all([
    simrsPrisma.product.findMany({
      where: filters,
      include: {
        stockDetails: {
          select: {
            quantity: true,
            expiredAt: true,
            unit: {
              select: {
                id: true,
                unitName: true,
              },
            },
          },
        },
      },
      skip: (page - 1) * Number(limit),
      take: Number(limit),
      orderBy,
    }),
    simrsPrisma.product.count({
      where: filters,
    }),
  ]);

  const results = products.map((p) => {
    const totalQuantity = p.stockDetails.reduce(
      (sum, s) => sum + (s.quantity || 0),
      0
    );

    const nearestExpired =
      p.stockDetails
        .filter((s) => s.expiredAt)
        .sort(
          (a, b) =>
            new Date(a.expiredAt).getTime() - new Date(b.expiredAt).getTime()
        )[0]?.expiredAt || null;

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

export const getMedicineById = async (id) => {
  const product = await simrsPrisma.product.findUnique({
    where: { id: Number(id), isEnabled: true },
    include: {
      stockDetails: {
        select: {
          quantity: true,
          expiredAt: true,
          unit: {
            select: {
              id: true,
              unitName: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    throw new ApiError("Product not found", 404);
  }

  const totalQuantity = product.stockDetails.reduce(
    (sum, s) => sum + (s.quantity || 0),
    0
  );

  const nearestExpired =
    product.stockDetails
      .filter((s) => s.expiredAt)
      .sort(
        (a, b) =>
          new Date(a.expiredAt).getTime() - new Date(b.expiredAt).getTime()
      )[0]?.expiredAt || null;

  return {
    ...product,
    totalQuantity,
    nearestExpired,
  };
};
