import ApiError from "../utils/apiError.js";
import { simrsPrisma } from "../config/db.js";

const getPaymentMethodById = async (id) => {
  const paymentMethod = await simrsPrisma.paymentMethod.findUnique({
    where: { id: Number(id) },
  });

  if (!paymentMethod) {
    throw new ApiError("Payment method not found", 404);
  }

  return paymentMethod;
};

const getAllPaymentMethods = async (query) => {
  const { page, limit, search, sortBy, sortOrder } = query;

  const filters = {};

  if (search) {
    filters.displayName = { contains: search, mode: "insensitive" };
  }

  filters.isEnabled = true;

  const orderBy = {};
  if (sortBy && ["displayName"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["displayName"] = "desc"; // default sorting by createdAt desc
  }

  const [paymentMethods, total] = await Promise.all([
    simrsPrisma.paymentMethod.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
    }),
    simrsPrisma.paymentMethod.count({
      where: filters,
    }),
  ]);

  return {
    results: paymentMethods,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const findPaymentMethodOrFail = async ({ paymentMethodId, select }) => {
  const paymentMethod = await simrsPrisma.paymentMethod.findUnique({
    where: { id: paymentMethodId },
    select,
  });

  if (!paymentMethod) {
    throw new ApiError("Payment method not found", 404);
  }

  return paymentMethod;
};

export { getPaymentMethodById, getAllPaymentMethods, findPaymentMethodOrFail };
