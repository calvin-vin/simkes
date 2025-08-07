import { wrapEmailLayout } from "./template.js";

export const generateAssignedStaffEmailToPatient = ({
  staffName,
  emergencyId,
  patientName,
  location,
  note,
  status,
}) => {
  const subject = "Permintaan Darurat Anda Sedang Diproses";
  const text = `Petugas ambulan ${staffName} telah ditugaskan untuk menangani permintaan darurat Anda`;

  const currentYear = new Date().getFullYear();
  const ssoBaseUrl = process.env.SSO_BACKEND_URL || "https://sso.pijartech.id";
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";

  const encodedLocation = encodeURIComponent(location || "");
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    : "#";

  const emergencyDetailUrl = `${frontendUrl}/emergency/${emergencyId}`;

  const contentHtml = `
    <div style="font-size:24px; font-weight:bold; text-align:center; color:#333333; margin-bottom:16px;">
      Permintaan Darurat Anda Sedang Diproses
    </div>
    <div style="font-size:16px; color:#555555; line-height:1.6;">
      <p>Halo <strong>${patientName}</strong>,</p>
      <p>Petugas ambulans <strong>${staffName}</strong> telah ditugaskan untuk menangani permintaan darurat Anda.</p>

      <p><strong>Status Saat Ini:</strong> ${status}</p>
      <p><strong>Catatan petugas:</strong> ${
        note || "Tidak ada catatan tambahan."
      }</p>

      <div style="margin-top:24px;">
        <a href="${googleMapsLink}" target="_blank" style="display:inline-block; margin:4px 8px 4px 0; padding:12px 20px; background-color:#4285F4; color:white; text-decoration:none; border-radius:6px;">Lokasi Petugas</a>
        <a href="${emergencyDetailUrl}" target="_blank" style="display:inline-block; margin:4px 0; padding:12px 20px; background-color:#34A853; color:white; text-decoration:none; border-radius:6px;">Lihat Detail Permintaan</a>
      </div>

      <p style="margin-top:24px;">Mohon tetap tenang dan tunggu kedatangan petugas. Anda dapat memantau status melalui aplikasi SIM Pelayanan Kesehatan.</p>
    </div>
  `;

  const html = wrapEmailLayout(ssoBaseUrl, contentHtml, currentYear, subject);

  return { subject, text, html };
};
