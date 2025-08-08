import { wrapEmailLayout } from "./template.js";

export const generateUpdatedEmergencyStatusEmailToPatient = ({
  patientName,
  emergencyId,
  staffName,
  location,
  note,
  status,
}) => {
  const subject = "Pembaruan Status Permintaan Darurat Anda";
  const text = `Status permintaan darurat Anda telah diperbarui menjadi ${status}. Ditangani oleh ${staffName}. Lokasi: ${location}. Catatan: ${note}`;

  const currentYear = new Date().getFullYear();
  const ssoBaseUrl = process.env.SSO_BACKEND_URL || "https://sso.pijartech.id";
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";

  const encodedLocation = encodeURIComponent(location || "");
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    : "#";

  const emergencyDetailUrl = `${frontendUrl}/patient/emergency/${emergencyId}`;

  const statusDescriptions = {
    ON_THE_WAY: "Petugas sedang dalam perjalanan ke lokasi Anda.",
    ARRIVED: "Petugas telah tiba di lokasi Anda.",
    PATIENT_IN_CAR: "Anda telah masuk ke dalam kendaraan petugas.",
    TO_HOSPITAL: "Anda sedang dalam perjalanan menuju rumah sakit.",
    COMPLETED: "Penanganan darurat Anda telah selesai.",
    CANCELED: "Penanganan darurat Anda telah dibatalkan.",
  };

  const statusMessage =
    statusDescriptions[status] ||
    "Status permintaan darurat Anda telah diperbarui.";

  const contentHtml = `
    <div style="font-size:24px; font-weight:bold; text-align:center; color:#333333; margin-bottom:16px;">
      Pembaruan Status Permintaan Darurat
    </div>
    <div style="font-size:16px; color:#555555; line-height:1.6;">
      <p>Halo <strong>${patientName}</strong>,</p>
      <p>${statusMessage}</p>

      <p><strong>Status Saat Ini:</strong> ${status}</p>
      <p><strong>Petugas:</strong> ${staffName}</p>\

      <p><strong>Catatan Petugas:</strong> ${
        note || "Tidak ada catatan tambahan."
      }</p>

      <div style="margin-top:24px;">
        <a href="${googleMapsLink}" target="_blank" style="display:inline-block; margin:4px 8px 4px 0; padding:12px 20px; background-color:#4285F4; color:white; text-decoration:none; border-radius:6px;">Lokasi Petugas</a>
        <a href="${emergencyDetailUrl}" target="_blank" style="display:inline-block; margin:4px 0; padding:12px 20px; background-color:#34A853; color:white; text-decoration:none; border-radius:6px;">Lihat Detail Permintaan</a>
      </div>

      <p style="margin-top:24px;">Mohon tetap tenang, petugas akan menangani Anda sebaik mungkin.</p>
    </div>
  `;

  const html = wrapEmailLayout(ssoBaseUrl, contentHtml, currentYear, subject);

  return { subject, text, html };
};
