/*
  Warnings:

  - You are about to drop the column `receiverId` on the `chatmessage` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `chatmessage` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `chatmessage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `chatmessage` DROP COLUMN `receiverId`,
    DROP COLUMN `senderId`,
    DROP COLUMN `timestamp`;
