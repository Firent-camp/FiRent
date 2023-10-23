/*
  Warnings:

  - Added the required column `amount` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `trip` ADD COLUMN `current` INTEGER NOT NULL;
