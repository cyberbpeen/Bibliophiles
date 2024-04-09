/*
  Warnings:

  - You are about to drop the column `genres` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `books` DROP COLUMN `genres`;

-- RenameIndex
ALTER TABLE `_bookstogenres` RENAME INDEX `_booksTogenres_AB_unique` TO `_BooksToGenres_AB_unique`;

-- RenameIndex
ALTER TABLE `_bookstogenres` RENAME INDEX `_booksTogenres_B_index` TO `_BooksToGenres_B_index`;

-- RenameIndex
ALTER TABLE `genres` RENAME INDEX `genres_title_key` TO `Genres_title_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `user_email_key` TO `User_email_key`;
