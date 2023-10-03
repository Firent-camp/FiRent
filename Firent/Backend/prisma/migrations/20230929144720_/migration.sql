/*
  Warnings:

  - Added the required column `receiverId` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chatmessage` ADD COLUMN `receiverId` VARCHAR(191) NOT NULL,
    ADD COLUMN `senderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
