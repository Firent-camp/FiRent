-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_chatId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `chatId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
