/*
  Warnings:

  - You are about to drop the `_genresonbooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_genresonbooks` DROP FOREIGN KEY `_GenresOnBooks_A_fkey`;

-- DropForeignKey
ALTER TABLE `_genresonbooks` DROP FOREIGN KEY `_GenresOnBooks_B_fkey`;

-- DropTable
DROP TABLE `_genresonbooks`;

-- CreateTable
CREATE TABLE `GenresOnBooks` (
    `id` VARCHAR(191) NOT NULL,
    `bookId` VARCHAR(191) NULL,
    `genreId` VARCHAR(191) NULL,

    INDEX `GenresOnBooks_bookId_genreId_idx`(`bookId`, `genreId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GenresOnBooks` ADD CONSTRAINT `GenresOnBooks_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Books`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenresOnBooks` ADD CONSTRAINT `GenresOnBooks_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genres`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
