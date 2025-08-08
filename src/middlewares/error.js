import { ZodError } from "zod";
import ApiError from "../utils/apiError.js";
import { Prisma } from "@prisma/client";
import multer from "multer";

const handleZodError = (err) => {
  const formattedErrors = err.errors.map((e) => ({
    path: e.path.join("."),
    message: e.message,
  }));
  return new ApiError("Validation failed", 422, formattedErrors);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorValidation = (err, res) => {
  res.status(err.statusCode).json({
    status: "error",
    message: err.message,
    data: err.errors,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    console.error("ERROR 💥", err);
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    err = handleZodError(err);
    return sendErrorValidation(err, res);
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      const fields = err.meta?.target?.join(", ") || "unknown field";
      const message = `Field(s) must be unique: ${fields}`;
      return res.status(409).json({
        status: "error",
        message,
      });
    }
  }

  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    sendErrorProd(error, res);
  }
};

export default errorHandler;
