/*
  Warnings:

  - The values [Segunda] on the enum `EnumScheduleConfigDayWeek` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumScheduleConfigDayWeek_new" AS ENUM ('segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo');
ALTER TABLE "ScheduleConfig" ALTER COLUMN "dayWeek" TYPE "EnumScheduleConfigDayWeek_new" USING ("dayWeek"::text::"EnumScheduleConfigDayWeek_new");
ALTER TYPE "EnumScheduleConfigDayWeek" RENAME TO "EnumScheduleConfigDayWeek_old";
ALTER TYPE "EnumScheduleConfigDayWeek_new" RENAME TO "EnumScheduleConfigDayWeek";
DROP TYPE "EnumScheduleConfigDayWeek_old";
COMMIT;
