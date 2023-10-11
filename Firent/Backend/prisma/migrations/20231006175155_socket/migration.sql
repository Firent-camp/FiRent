/*
  Warnings:

  - You are about to alter the column `B` on the `_usertochat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `chat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `message` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `chatId` on the `message` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `_usertochat` DROP FOREIGN KEY `_UserTochat_B_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- AlterTable
ALTER TABLE `_usertochat` MODIFY `B` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `chat` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `message` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `chatId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `chat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTochat` ADD CONSTRAINT `_UserTochat_B_fkey` FOREIGN KEY (`B`) REFERENCES `chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
