-- AlterTable
ALTER TABLE `image` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`firebaseId`) ON DELETE SET NULL ON UPDATE CASCADE;
