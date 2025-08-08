import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

const createPaymentMethod = async ({ name }) => {
  const paymentMethod = await prisma.paymentMethod.create({
    data: { name },
  });
  return paymentMethod;
};

const updatePaymentMethod = async (id, { name }) => {
  const existing = await prisma.paymentMethod.findUnique({ where: { id } });

  if (!existing) {
    throw new ApiError("Payment method not found", 404);
  }

  return await prisma.paymentMethod.update({
    where: { id },
    data: { name },
  });
};

const deletePaymentMethod = async (id) => {
  const existing = await prisma.paymentMethod.findUnique({ where: { id } });

  if (!existing) {
    throw new ApiError("Payment method not found", 404);
  }

  return prisma.paymentMethod.delete({ where: { id } });
};

const getPaymentMethodById = async (id) => {
  const paymentMethod = await prisma.paymentMethod.findUnique({
    where: { id },
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
    filters.name = { contains: search, mode: "insensitive" };
  }

  const orderBy = {};
  if (sortBy && ["name", "createdAt"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["createdAt"] = "desc"; // default sorting by createdAt desc
  }

  const [paymentMethods, total] = await Promise.all([
    prisma.paymentMethod.findMany({
      where: filters,
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
    }),
    prisma.paymentMethod.count({
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
  const paymentMethod = await prisma.paymentMethod.findUnique({
    where: { id: paymentMethodId },
    select,
  });

  if (!paymentMethod) {
    throw new ApiError("Payment method not found", 404);
  }

  return paymentMethod;
};

export {
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  getPaymentMethodById,
  getAllPaymentMethods,
  findPaymentMethodOrFail,
};
