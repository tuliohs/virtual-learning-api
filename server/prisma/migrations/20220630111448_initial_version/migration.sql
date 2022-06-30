-- CreateTable
CREATE TABLE "PreRegister" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "id" TEXT NOT NULL,
    "message" TEXT,
    "name" TEXT,
    "origin" TEXT,
    "phone" TEXT,
    "processed" BOOLEAN,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreRegister_pkey" PRIMARY KEY ("id")
);
