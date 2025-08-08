import axios from "axios";
import logger from "../utils/logger.js";

const WHATSAPP_URL = process.env.WHATSAPP_API_URL;

export const sendWhatsApp = async (to, message) => {
  try {
    const payload = {
      number: to,
      message: message,
    };

    const response = await axios.post(WHATSAPP_URL, payload);

    if (
      response.data &&
      response.data.message === "Message sent successfully"
    ) {
      logger.info(`WhatsApp message sent to ${to}`);
      return true;
    } else {
      logger.error(
        `Failed to send WhatsApp message to ${to}: ${
          response.data.message || "Unknown error"
        }`
      );
      return false;
    }
  } catch (error) {
    logger.error(`Error sending WhatsApp message to ${to}: ${error.message}`);
    return false;
  }
};

export const sendWhatsAppToAmbulanceStaff = ({
  phone,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
}) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";
  const emergencyDetailUrl = `${frontendUrl}/ambulance/emergency/${emergencyId}`;
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`
    : "";

  const message = `🚨 *Permintaan Darurat Baru!*

Halo ${staffName},

Pasien *${patientName}* telah mengirimkan permintaan bantuan darurat.

📝 *Catatan:* ${note || "Tidak ada catatan."}

🔗 Google Maps: ${googleMapsLink}
📄 Lihat Detail: ${emergencyDetailUrl}

Silakan segera tanggapi permintaan ini melalui aplikasi SIM Pelayanan Kesehatan.`;

  return sendWhatsApp(phone, message);
};

export const sendAssignedStaffWhatsAppToPatient = ({
  phone,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
  status,
}) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";
  const emergencyDetailUrl = `${frontendUrl}/patient/emergency/${emergencyId}`;
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`
    : "";

  const message = `✅ *Petugas Sudah Ditugaskan*

Halo ${patientName},

Permintaan bantuan darurat Anda sudah *ditanggapi*.

👨‍⚕️ *Petugas:* ${staffName}
📝 *Catatan Petugas:* ${note || "Tidak ada catatan."}
📊 *Status:* ${status}

🔗 Lokasi Petugas: ${googleMapsLink}
📄 Lihat Detail: ${emergencyDetailUrl}

Mohon tetap tenang, petugas akan segera menuju lokasi Anda.`;

  return sendWhatsApp(phone, message);
};

export const sendUpdatedEmergencyStatusWhatsAppToPatient = ({
  phone,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
  status,
}) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";
  const emergencyDetailUrl = `${frontendUrl}/patient/emergency/${emergencyId}`;
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`
    : "";

  let statusMessage = "";

  switch (status) {
    case "ON_THE_WAY":
      statusMessage = `🚑 *Petugas sedang menuju lokasi Anda.*`;
      break;
    case "ARRIVED":
      statusMessage = `📍 *Petugas telah tiba di lokasi Anda.*`;
      break;
    case "PATIENT_IN_CAR":
      statusMessage = `🚕 *Anda sudah berada di dalam mobil ambulans.*`;
      break;
    case "TO_HOSPITAL":
      statusMessage = `🏥 *Anda sedang dalam perjalanan menuju rumah sakit.*`;
      break;
    case "COMPLETED":
      statusMessage = `✅ *Penanganan darurat Anda telah selesai.*`;
      break;
    case "CANCELED":
      statusMessage = `⚠️ *Permintaan bantuan darurat Anda telah dibatalkan.*`;
      break;
    default:
      statusMessage = `📊 *Status darurat telah diperbarui: ${status}.*`;
  }

  const message = `ℹ️ *Pembaruan Status Darurat*

Halo ${patientName},

${statusMessage}

👨‍⚕️ *Petugas:* ${staffName}
📝 *Catatan Petugas:* ${note || "Tidak ada catatan."}

🔗 Lokasi Petugas: ${googleMapsLink}
📄 Lihat Detail: ${emergencyDetailUrl}

Mohon tetap tenang, petugas akan menangani Anda sebaik mungkin.`;

  return sendWhatsApp(phone, message);
};
