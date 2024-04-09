/*
  Warnings:

  - You are about to drop the `genresonbooks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genres` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `genresonbooks` DROP FOREIGN KEY `GenresOnBooks_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `genresonbooks` DROP FOREIGN KEY `GenresOnBooks_genreId_fkey`;

-- AlterTable
ALTER TABLE `books` ADD COLUMN `genres` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `genresonbooks`;
