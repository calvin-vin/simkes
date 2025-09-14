-- CreateTable
CREATE TABLE "FacilityRating" (
    "id" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacilityRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FacilityRating_reservationId_key" ON "FacilityRating"("reservationId");

-- CreateIndex
CREATE INDEX "FacilityRating_facilityId_idx" ON "FacilityRating"("facilityId");

-- CreateIndex
CREATE INDEX "FacilityRating_patientId_idx" ON "FacilityRating"("patientId");

-- AddForeignKey
ALTER TABLE "FacilityRating" ADD CONSTRAINT "FacilityRating_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
