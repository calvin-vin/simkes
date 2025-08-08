import { wrapEmailLayout } from "./template.js";

export const generateNewEmergencyEmailToAmbulanceStaff = ({
  staffName,
  patientName,
  location,
  note,
  emergencyId,
}) => {
  const subject = "Permintaan Darurat Baru Telah Dikirimkan";
  const text = `Permintaan darurat baru dari pasien ${patientName} telah dibuat. Lokasi: ${location}. Catatan: ${note}.`;

  const currentYear = new Date().getFullYear();
  const ssoBaseUrl = process.env.SSO_BACKEND_URL || "https://sso.pijartech.id";
  const frontendUrl =
    process.env.FRONTEND_URL || "https://simkes.malinau.go.id";

  const encodedLocation = encodeURIComponent(location || "");
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    : "#";

  const emergencyDetailUrl = `${frontendUrl}/ambulance/emergency/${emergencyId}`;

  const contentHtml = `
    <div style="font-size:24px; font-weight:bold; text-align:center; color:#333333; margin-bottom:16px;">
      Permintaan Darurat Baru
    </div>
    <div style="font-size:16px; color:#555555; line-height:1.6;">
      <p>Halo <strong>${staffName}</strong>,</p>
      <p>Pasien <strong>${patientName}</strong> telah mengirimkan permintaan darurat.</p>
      <p><strong>Catatan:</strong> ${note || "Tidak ada catatan tambahan."}</p>

      <div style="margin-top:24px;">
        <a href="${googleMapsLink}" target="_blank" style="display:inline-block; margin:4px 8px 4px 0; padding:12px 20px; background-color:#4285F4; color:white; text-decoration:none; border-radius:6px;">Buka di Google Maps</a>
        <a href="${emergencyDetailUrl}" target="_blank" style="display:inline-block; margin:4px 0; padding:12px 20px; background-color:#34A853; color:white; text-decoration:none; border-radius:6px;">Lihat Detail Permintaan</a>
      </div>

      <p style="margin-top:24px;">Silakan segera tanggapi permintaan ini melalui aplikasi SIM Pelayanan Kesehatan.</p>
    </div>
  `;

  const html = wrapEmailLayout(ssoBaseUrl, contentHtml, currentYear, subject);

  return { subject, text, html };
};
