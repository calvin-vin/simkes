npx prisma init

npx prisma migrate dev --name init --schema=prisma/simkes.schema.prisma
npx prisma generate
npx prisma migrate reset

ROLES IN PIJARTECH
-OPERATOR
-PATIENT
-SUPER ADMIN
-AMBULANCE STAFF

PATIENT
calvinsan123+1@gmail.com
1971022301000002
admin123

AMBULANCE STAFF
calvinsan123+2@gmail.com
1971022301000003
admin123

-Duplicate allowed pada saat create service karena fungsinya masih saya komentari

-Checkin validasi berdasarkan waktu di komentari

-unit rating belum di test

npx prisma generate --schema=prisma/simkes/schema.prisma
npx prisma generate --schema=prisma/simrs/schema.prisma

npx prisma migrate dev --name change_attribute_status_to_isactive --schema=prisma/simkes/schema.prisma
