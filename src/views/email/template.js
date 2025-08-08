export const getFooter = (baseUrl, currentYear) => `
  <div style="background-color:#111111; color:#ffffff; text-align:center; font-family: Arial, sans-serif;">
        <!-- Gambar dekoratif -->
        <img src="${baseUrl}/api-v1/public/decor.png" alt="Dekorasi Footer" style="width:100%; display:block; margin:0; padding:0; border-radius:0 0 8px 8px;" />

        <!-- Konten Footer -->
        <div style="padding:20px 30px 24px;">
          <!-- Media Sosial -->
          <div style="margin-bottom:12px; font-size:14px;">
            <a href="https://www.youtube.com/c/DinasKominfoKabupatenMalinau" style="color:#ffffff; text-decoration:none; margin:0 8px;">YouTube</a> |
            <a href="https://www.instagram.com/kominfo_malinau" style="color:#ffffff; text-decoration:none; margin:0 8px;">Instagram</a> |
            <a href="https://x.com/Kominfo_malinau" style="color:#ffffff; text-decoration:none; margin:0 8px;">X (Twitter)</a> |
            <a href="https://www.facebook.com/DiskominfoMalinau?_rdc=1&_rdr#" style="color:#ffffff; text-decoration:none; margin:0 8px;">Facebook</a>
          </div>

          <!-- Alamat dan Kontak -->
          <div style="font-size:13px; line-height:1.5; margin-bottom:10px; color:#ffffff;">
            Alamat: Jl. Pusat Pemerintahan No. 01<br />
            Telp/Fax: (0553 - 21322)<br />
            Email: 
            <a href="mailto:diskominfo@malinau.go.id" 
              style="color:#ffffff !important; text-decoration:underline; font-weight:normal;">
              diskominfo@malinau.go.id
            </a>
          </div>

          <!-- Copyright -->
          <div style="font-size:12px; color:#bbbbbb;">© ${currentYear} Saget Malinau</div>
        </div>
      </div>
`;

export const wrapEmailLayout = (baseUrl, contentHtml, currentYear, title) => `
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
  </head>
  <body style="margin:0; padding:20px 0; font-family: Arial, sans-serif; background-color:#F2F2F2;">
    <div style="max-width:600px; margin:40px auto; background-color:#ffffff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); overflow:hidden;">
      <!-- Konten utama -->
      <div style="padding:40px;">
        <div style="text-align:center; margin-bottom:24px;">
          <img src="${baseUrl}/api-v1/public/logo.png" alt="Logo SSO Malinau" width="160" style="max-width:100%;" />
        </div>
        ${contentHtml}
      </div>
      ${getFooter(baseUrl, currentYear)}
    </div>
  </body>
</html>
`;
