/*
  Warnings:

  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `thread` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_threadId_fkey`;

-- DropForeignKey
ALTER TABLE `thread` DROP FOREIGN KEY `Thread_authorId_fkey`;

-- DropTable
DROP TABLE `comment`;

-- DropTable
DROP TABLE `thread`;
