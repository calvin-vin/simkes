import { simkesPrisma } from "../config/db.js";
import ApiError from "../utils/apiError.js";

/**
 * Get hospital location
 * @returns {Promise<Object>} Hospital location
 * @throws {ApiError} If no hospital location found
 */
export const getHospitalLocation = async () => {
  const hospitalLocation = await simkesPrisma.hospitalLocation.findFirst();

  if (!hospitalLocation) {
    throw new ApiError(404, "Lokasi rumah sakit tidak ditemukan");
  }

  return hospitalLocation;
};

/**
 * Save hospital location (create or update)
 * @param {Object} data - Hospital location data
 * @returns {Promise<Object>} Saved hospital location
 */
export const saveHospitalLocation = async (data) => {
  const existingLocation = await simkesPrisma.hospitalLocation.findFirst();

  if (existingLocation) {
    // Update existing location
    return simkesPrisma.hospitalLocation.update({
      where: { id: existingLocation.id },
      data,
    });
  } else {
    // Create new location
    return simkesPrisma.hospitalLocation.create({
      data,
    });
  }
};

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

/**
 * Convert degrees to radians
 * @param {number} deg - Degrees
 * @returns {number} Radians
 */
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

/**
 * Check if patient is within range of hospital
 * @param {number} patientLatitude - Patient latitude
 * @param {number} patientLongitude - Patient longitude
 * @param {number} maxDistance - Maximum distance in kilometers (default: 1)
 * @returns {Promise<boolean>} True if patient is within range
 */
export const isPatientWithinHospitalRange = async (
  patientLatitude,
  patientLongitude,
  maxDistance = 1
) => {
  try {
    const hospitalLocation = await getHospitalLocation();

    const distance = calculateDistance(
      patientLatitude,
      patientLongitude,
      hospitalLocation.latitude,
      hospitalLocation.longitude
    );

    return distance <= maxDistance;
  } catch (error) {
    console.error("Error checking patient distance:", error);
    return false;
  }
};

export const hospitalLocationService = {
  getHospitalLocation,
  saveHospitalLocation,
  calculateDistance,
  isPatientWithinHospitalRange,
};
