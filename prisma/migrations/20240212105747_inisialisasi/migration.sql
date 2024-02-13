-- CreateTable
CREATE TABLE `Koleksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `kata` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Koleksi_email_link_kata_key`(`email`, `link`, `kata`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
