/*
  Warnings:

  - You are about to drop the `Sound` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Sound";

-- CreateTable
CREATE TABLE "sounds" (
    "command" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "filename" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sounds_command_key" ON "sounds"("command");

-- CreateIndex
CREATE UNIQUE INDEX "sounds_id_key" ON "sounds"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sounds_filename_key" ON "sounds"("filename");
