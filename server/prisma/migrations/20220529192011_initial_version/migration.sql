-- CreateTable
CREATE TABLE "Theme" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioTema" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "idTemaId" TEXT NOT NULL,
    "idUserId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsuarioTema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioTema_idTemaId_key" ON "UsuarioTema"("idTemaId");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioTema_idUserId_key" ON "UsuarioTema"("idUserId");

-- AddForeignKey
ALTER TABLE "UsuarioTema" ADD CONSTRAINT "UsuarioTema_idTemaId_fkey" FOREIGN KEY ("idTemaId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioTema" ADD CONSTRAINT "UsuarioTema_idUserId_fkey" FOREIGN KEY ("idUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
