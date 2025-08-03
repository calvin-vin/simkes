#!/bin/sh

# Generate SSL cert if not exists
if [ ! -f "/etc/letsencrypt/live/presensi.mun.web.id/fullchain.pem" ]; then
  echo "Generating SSL certificate..."
  certbot certonly --noninteractive --standalone --agree-tos \
    --email calvinsan123@gmail.com \
    -d presensi.mun.web.id
fi

# Start nginx
exec nginx -g "daemon off;"