/*
  Warnings:

  - You are about to drop the column `idTemaId` on the `UsuarioTema` table. All the data in the column will be lost.
  - You are about to drop the column `idUserId` on the `UsuarioTema` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsuarioTema" DROP CONSTRAINT "UsuarioTema_idTemaId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioTema" DROP CONSTRAINT "UsuarioTema_idUserId_fkey";

-- DropIndex
DROP INDEX "UsuarioTema_idTemaId_key";

-- DropIndex
DROP INDEX "UsuarioTema_idUserId_key";

-- AlterTable
ALTER TABLE "UsuarioTema" DROP COLUMN "idTemaId",
DROP COLUMN "idUserId",
ADD COLUMN     "themeId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "UsuarioTema" ADD CONSTRAINT "UsuarioTema_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioTema" ADD CONSTRAINT "UsuarioTema_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
