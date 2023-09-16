/*
  Warnings:

  - You are about to drop the column `generatedId` on the `links` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,serverId]` on the table `links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" DROP COLUMN "generatedId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "generatedId" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sound" (
    "command" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "filename" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_generatedId_key" ON "users"("generatedId");

-- CreateIndex
CREATE UNIQUE INDEX "users_account_key" ON "users"("account");

-- CreateIndex
CREATE UNIQUE INDEX "Sound_command_key" ON "Sound"("command");

-- CreateIndex
CREATE UNIQUE INDEX "Sound_id_key" ON "Sound"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sound_filename_key" ON "Sound"("filename");

-- CreateIndex
CREATE UNIQUE INDEX "links_userId_serverId_key" ON "links"("userId", "serverId");

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
