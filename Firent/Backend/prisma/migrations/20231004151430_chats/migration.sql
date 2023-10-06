/*
  Warnings:

  - You are about to drop the column `firebaseId` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `chatId` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- AlterTable
ALTER TABLE `chat` DROP COLUMN `firebaseId`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `chatId`,
    DROP COLUMN `createdAt`,
    ADD COLUMN `chat` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_UserTochat` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserTochat_AB_unique`(`A`, `B`),
    INDEX `_UserTochat_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserTochat` ADD CONSTRAINT `_UserTochat_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`firebaseId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserTochat` ADD CONSTRAINT `_UserTochat_B_fkey` FOREIGN KEY (`B`) REFERENCES `chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
