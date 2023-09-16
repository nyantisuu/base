-- CreateTable
CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "serverId" TEXT NOT NULL,
    "generatedId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);
