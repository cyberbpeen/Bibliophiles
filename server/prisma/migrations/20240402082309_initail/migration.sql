/*
  Warnings:

  - You are about to drop the `_bookstogenres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_bookstogenres` DROP FOREIGN KEY `_booksTogenres_A_fkey`;

-- DropForeignKey
ALTER TABLE `_bookstogenres` DROP FOREIGN KEY `_booksTogenres_B_fkey`;

-- DropTable
DROP TABLE `_bookstogenres`;

-- CreateTable
CREATE TABLE `_GenresOnBooks` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GenresOnBooks_AB_unique`(`A`, `B`),
    INDEX `_GenresOnBooks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GenresOnBooks` ADD CONSTRAINT `_GenresOnBooks_A_fkey` FOREIGN KEY (`A`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GenresOnBooks` ADD CONSTRAINT `_GenresOnBooks_B_fkey` FOREIGN KEY (`B`) REFERENCES `Genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
