import jwt from "jsonwebtoken";
import { promisify } from "util";
import prisma from "../config/db.js";

// Remove refresh token from database
const removeRefreshToken = async (id) => {
  await prisma.refreshToken.deleteMany({
    where: { userId: id },
  });
};

// Verify tokens
const verifyToken = async (token, secret) => {
  return await promisify(jwt.verify)(token, secret);
};

// Verify refresh token from database
const verifyRefreshToken = async (token) => {
  const storedToken = await prisma.refreshToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!storedToken || new Date() > new Date(storedToken.expiresAt)) {
    return null;
  }

  return storedToken.user;
};

export { removeRefreshToken, verifyToken, verifyRefreshToken };
