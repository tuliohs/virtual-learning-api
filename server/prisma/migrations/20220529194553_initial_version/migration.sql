/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumScheduleConfigDayWeek" AS ENUM ('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "ScheduleConfig" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dayWeek" "EnumScheduleConfigDayWeek" NOT NULL,
    "id" TEXT NOT NULL,
    "idUserId" TEXT NOT NULL,
    "timeEnd" TEXT NOT NULL,
    "timeStart" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduleConfig_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScheduleConfig" ADD CONSTRAINT "ScheduleConfig_idUserId_fkey" FOREIGN KEY ("idUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
