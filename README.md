npx prisma generate --schema=prisma/simkes/schema.prisma
npx prisma generate --schema=prisma/simrs/schema.prisma

npx prisma migrate dev --name add_reservation_qrcode --schema=prisma/simkes/schema.prisma
