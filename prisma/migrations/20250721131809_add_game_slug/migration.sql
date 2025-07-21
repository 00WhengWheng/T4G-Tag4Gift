/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `GameTemplate` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "GameTemplate" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "GameTemplate_slug_key" ON "GameTemplate"("slug");
