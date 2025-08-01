import fs from "fs";
import path from "path";
import { URL } from "url";
import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";
import { saveFile } from "../utils/saveFile.js";
import { findPatientIdOrFail } from "./patient.service.js";
import { findPaymentMethodOrFail } from "./paymentMethod.service.js";

export const createPatientPayment = async ({
  patientId,
  paymentMethodId,
  participantId,
  paymentFile,
}) => {
  const [patient, _] = await Promise.all([
    findPatientIdOrFail({ patientId }),
    findPaymentMethodOrFail({ paymentMethodId }),
  ]);

  let paymentFileUrl = null;
  if (paymentFile) {
    const savedFilePath = saveFile({
      buffer: paymentFile.buffer,
      baseFolder: "public",
      subFolder: path.join("patient-payments", patient.id),
      extension: path.extname(paymentFile.originalname),
    });

    paymentFileUrl = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  const result = await prisma.patientPayment.create({
    data: {
      patientId: patientId,
      paymentMethodId,
      participantId,
      paymentFile: paymentFileUrl,
    },
    include: {
      paymentMethod: true,
      patient: true,
    },
  });

  return result;
};

export const getAllPatientPayments = async ({ patientId, query }) => {
  const patient = await findPatientIdOrFail({ patientId });

  const { page, limit, search, sortBy, sortOrder } = query;

  const filters = {};

  if (search) {
    filters.participantId = { contains: search, mode: "insensitive" };
  }

  const orderBy = {};
  if (sortBy && ["participantId", "createdAt"].includes(sortBy)) {
    orderBy[sortBy] =
      sortOrder && ["asc", "desc"].includes(sortOrder.toLowerCase())
        ? sortOrder.toLowerCase()
        : "asc";
  } else {
    orderBy["createdAt"] = "desc"; // default sorting by createdAt desc
  }

  const [patientPayments, total] = await Promise.all([
    prisma.patientPayment.findMany({
      where: {
        patientId: patient.id,
        ...filters,
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
      include: {
        paymentMethod: true,
        patient: true,
      },
    }),
    prisma.patientPayment.count({
      where: {
        patientId: patient.id,
        ...filters,
      },
    }),
  ]);

  return {
    results: patientPayments,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getPatientPaymentById = async ({ id, patientId }) => {
  const patientPayment = await prisma.patientPayment.findUnique({
    where: { id, patientId },
    include: {
      paymentMethod: true,
      patient: true,
    },
  });

  if (!patientPayment) {
    throw new ApiError("Patient payment not found", 404);
  }

  return patientPayment;
};

export const updatePatientPayment = async ({
  id,
  patientId,
  paymentMethodId,
  participantId,
  paymentFile,
}) => {
  const existing = await prisma.patientPayment.findUnique({
    where: { id },
  });

  if (!existing || existing.patientId !== patientId) {
    throw new ApiError("Patient payment not found or access denied", 404);
  }

  const updateData = {};

  // Update relasi paymentMethod
  if (paymentMethodId) {
    await findPaymentMethodOrFail({ paymentMethodId });
    updateData.paymentMethod = {
      connect: { id: paymentMethodId },
    };
  }

  if (participantId) {
    updateData.participantId = participantId;
  }

  if (paymentFile) {
    // Hapus file lama jika ada
    if (existing.paymentFile) {
      const filePath = path.join(
        "public",
        new URL(existing.paymentFile).pathname.replace(/^\/+/, "")
      );
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (err) {
          console.warn("Gagal menghapus file lama:", err.message);
        }
      }
    }

    // Simpan file baru
    const savedFilePath = saveFile({
      buffer: paymentFile.buffer,
      baseFolder: "public",
      subFolder: path.join("patient-payments", patientId),
      extension: path.extname(paymentFile.originalname),
    });

    updateData.paymentFile = `${process.env.HOST_URL}/${savedFilePath.replace(
      /\\/g,
      "/"
    )}`;
  }

  const updated = await prisma.patientPayment.update({
    where: { id },
    data: updateData,
    include: {
      paymentMethod: true,
      patient: true,
    },
  });

  return updated;
};

export const deletePatientPayment = async ({ id, patientId }) => {
  const payment = await prisma.patientPayment.findUnique({
    where: { id },
  });

  if (!payment || payment.patientId !== patientId) {
    throw new ApiError("Patient payment not found or access denied", 404);
  }

  // Optional: Delete file from storage if exists
  if (payment.paymentFile) {
    const filePath = path.join(
      "public",
      new URL(payment.paymentFile).pathname.replace(/^\/+/, "")
    );

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (err) {
      console.warn("Failed to delete document file:", err.message);
    }
  }

  await prisma.patientPayment.delete({
    where: { id },
  });
};
