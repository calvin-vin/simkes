import fs from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";

/**
 * Save file buffer to file system with unique filename
 * @param {Buffer} buffer - File buffer data
 * @param {string} baseFolder - Base folder to save (default: "uploads")
 * @param {string} subFolder - Subfolder structure (e.g. referrals/2025-07-09)
 * @param {string} filenamePrefix - Filename prefix (e.g. patient name)
 * @param {string} extension - File extension including dot (e.g. ".pdf" or ".png")
 * @returns {string} - Public accessible file path (relative to base folder)
 */
export const saveFile = ({
  buffer,
  baseFolder = "public",
  subFolder = "",
  filenamePrefix = "file",
  extension = "",
}) => {
  // Generate random string for uniqueness
  const randomStr = randomBytes(4).toString("hex");

  // Prepare folder path and safe filename
  const folderPath = path.join(baseFolder, subFolder);
  const safePrefix = filenamePrefix.replace(/\s+/g, "_");
  const fileName = `${safePrefix}-${randomStr}${extension}`;
  const filePath = path.join(folderPath, fileName);

  // Ensure folder exists
  fs.mkdir(folderPath, { recursive: true });

  // Save file
  fs.writeFile(filePath, buffer);

  // Return relative path for API usage
  return filePath.replace(/^public[\\/]/, "").replace(/^uploads[\\/]/, "");
};
