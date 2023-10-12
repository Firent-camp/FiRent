-- AlterTable
ALTER TABLE `image` ADD COLUMN `threadId` INTEGER NULL,
    MODIFY `entityType` ENUM('CAMPGROUND', 'USER', 'EQUIPMENT', 'THREAD') NOT NULL;

-- AlterTable
ALTER TABLE `thread` ADD COLUMN `imagePath` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_threadId_fkey` FOREIGN KEY (`threadId`) REFERENCES `Thread`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
