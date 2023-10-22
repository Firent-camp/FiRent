-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_chatId_fkey`;

-- CreateTable
CREATE TABLE `_participants` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_participants_AB_unique`(`A`, `B`),
    INDEX `_participants_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_participants` ADD CONSTRAINT `_participants_A_fkey` FOREIGN KEY (`A`) REFERENCES `Chat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_participants` ADD CONSTRAINT `_participants_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`firebaseId`) ON DELETE CASCADE ON UPDATE CASCADE;
