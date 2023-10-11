/*
  Warnings:

  - The primary key for the `chat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `latestMessage` on the `chat` table. All the data in the column will be lost.
  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `_usertochat` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `chatId` on table `message` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `_usertochat` DROP FOREIGN KEY `_UserTochat_A_fkey`;

-- DropForeignKey
ALTER TABLE `_usertochat` DROP FOREIGN KEY `_UserTochat_B_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- AlterTable
ALTER TABLE `chat` DROP PRIMARY KEY,
    DROP COLUMN `latestMessage`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `message` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `chatId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `_usertochat`;

-- CreateTable
CREATE TABLE `_ChatToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ChatToUser_AB_unique`(`A`, `B`),
    INDEX `_ChatToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatToUser` ADD CONSTRAINT `_ChatToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ChatToUser` ADD CONSTRAINT `_ChatToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`firebaseId`) ON DELETE CASCADE ON UPDATE CASCADE;
