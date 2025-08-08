/*
  Warnings:

  - You are about to drop the column `externalId` on the `MedicalCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[simrsId]` on the table `MedicalCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `simrsId` to the `MedicalCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MedicalCategory_externalId_key";

-- AlterTable
ALTER TABLE "MedicalCategory" DROP COLUMN "externalId",
ADD COLUMN     "simrsId" TEXT NOT NULL,
ADD COLUMN     "syncAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalCategory_simrsId_key" ON "MedicalCategory"("simrsId");
