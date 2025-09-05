-- CreateTable
CREATE TABLE "DoctorRating" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DoctorRating_reservationId_key" ON "DoctorRating"("reservationId");

-- CreateIndex
CREATE INDEX "DoctorRating_doctorId_idx" ON "DoctorRating"("doctorId");

-- CreateIndex
CREATE INDEX "DoctorRating_patientId_idx" ON "DoctorRating"("patientId");
