/*
  Warnings:

  - You are about to drop the column `generatedId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `sounds` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[accountId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_generatedId_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "generatedId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- DropTable
DROP TABLE "sounds";

-- CreateTable
CREATE TABLE "syncs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "syncs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "syncs_userId_key" ON "syncs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_accountId_key" ON "users"("accountId");

-- AddForeignKey
ALTER TABLE "syncs" ADD CONSTRAINT "syncs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
