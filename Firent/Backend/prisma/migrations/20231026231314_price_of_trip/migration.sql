/*
  Warnings:

  - Added the required column `current` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment` ADD COLUMN `current` INTEGER NOT NULL;
