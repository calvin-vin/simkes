-- CreateTable
CREATE TABLE "DoctorMedicalCategory" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "medicalCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorMedicalCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorMedicalCategory_doctorId_medicalCategoryId_key" ON "DoctorMedicalCategory"("doctorId", "medicalCategoryId");

-- AddForeignKey
ALTER TABLE "DoctorMedicalCategory" ADD CONSTRAINT "DoctorMedicalCategory_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorMedicalCategory" ADD CONSTRAINT "DoctorMedicalCategory_medicalCategoryId_fkey" FOREIGN KEY ("medicalCategoryId") REFERENCES "MedicalCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
