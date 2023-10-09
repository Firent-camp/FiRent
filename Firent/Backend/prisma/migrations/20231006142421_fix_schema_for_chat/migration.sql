/*
  Warnings:

  - You are about to drop the column `chat` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `sender` on the `message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `message` DROP COLUMN `chat`,
    DROP COLUMN `sender`,
    ADD COLUMN `chatId` VARCHAR(191) NULL,
    ADD COLUMN `senderId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `chat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
