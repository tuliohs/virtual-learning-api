/*
  Warnings:

  - The values [segunda] on the enum `EnumScheduleConfigDayWeek` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `idUserId` on the `ScheduleConfig` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumScheduleConfigDayWeek_new" AS ENUM ('Segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo');
ALTER TABLE "ScheduleConfig" ALTER COLUMN "dayWeek" TYPE "EnumScheduleConfigDayWeek_new" USING ("dayWeek"::text::"EnumScheduleConfigDayWeek_new");
ALTER TYPE "EnumScheduleConfigDayWeek" RENAME TO "EnumScheduleConfigDayWeek_old";
ALTER TYPE "EnumScheduleConfigDayWeek_new" RENAME TO "EnumScheduleConfigDayWeek";
DROP TYPE "EnumScheduleConfigDayWeek_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "ScheduleConfig" DROP CONSTRAINT "ScheduleConfig_idUserId_fkey";

-- AlterTable
ALTER TABLE "ScheduleConfig" DROP COLUMN "idUserId",
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "dayWeek" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ScheduleConfig" ADD CONSTRAINT "ScheduleConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
