import fs from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";
import QRCode from "qrcode";

/**
 * Generate QR code and save to file system
 * @param {string} content - Content to encode in QR
 * @param {string} baseFolder - Base folder to save QR
 * @param {string} subFolder - Subfolder structure (e.g. reservations/Poli_Umum/2025-07-09)
 * @param {string} filenamePrefix - Filename prefix (e.g. patient name)
 * @returns {string} - Public accessible file path
 */
export const generateQr = async ({
  content,
  baseFolder = "public",
  subFolder = "",
  filenamePrefix = "qr",
}) => {
  // Generate random string for uniqueness
  const randomStr = randomBytes(4).toString("hex");

  // Prepare folder path
  const folderPath = path.join(baseFolder, subFolder);
  const safePrefix = filenamePrefix.replace(/\s+/g, "_");
  const fileName = `${safePrefix}-${randomStr}.png`;
  const filePath = path.join(folderPath, fileName);

  // Ensure folder exists
  await fs.mkdir(folderPath, { recursive: true });

  // Generate QR and save
  QRCode.toFile(filePath, content, {
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
    width: 300,
  });

  // Return relative path for API usage
  return filePath.replace(/^public[\\/]/, "");
};
