/*
  Warnings:

  - The values [SUNDAY,MONDAY,TUESDAY,WEDNESDAY,FRIDAY,SATURDAY] on the enum `Days` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Days_new" AS ENUM ('MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU');
ALTER TYPE "Days" RENAME TO "Days_old";
ALTER TYPE "Days_new" RENAME TO "Days";
DROP TYPE "Days_old";
COMMIT;
