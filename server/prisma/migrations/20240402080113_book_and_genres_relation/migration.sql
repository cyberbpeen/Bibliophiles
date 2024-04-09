/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `genres` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `_booksTogenres` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_booksTogenres_AB_unique`(`A`, `B`),
    INDEX `_booksTogenres_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `genres_title_key` ON `genres`(`title`);

-- AddForeignKey
ALTER TABLE `_booksTogenres` ADD CONSTRAINT `_booksTogenres_A_fkey` FOREIGN KEY (`A`) REFERENCES `books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_booksTogenres` ADD CONSTRAINT `_booksTogenres_B_fkey` FOREIGN KEY (`B`) REFERENCES `genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
