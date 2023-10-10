/*
  Warnings:

  - You are about to drop the column `createdAt` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `message` table. All the data in the column will be lost.
  - Made the column `content` on table `message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `message` DROP COLUMN `createdAt`,
    DROP COLUMN `senderId`,
    MODIFY `content` VARCHAR(191) NOT NULL;
