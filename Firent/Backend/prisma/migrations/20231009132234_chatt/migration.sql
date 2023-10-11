/*
  Warnings:

  - You are about to drop the `_chattouser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chatId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_chattouser` DROP FOREIGN KEY `_ChatToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_chattouser` DROP FOREIGN KEY `_ChatToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_senderId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `chatId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_chattouser`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
