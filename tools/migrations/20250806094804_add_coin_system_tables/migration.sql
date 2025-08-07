/*
  Warnings:

  - You are about to drop the column `challengeId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the `GiftChallenge` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[giftId]` on the table `Challenge` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gameId]` on the table `Challenge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gameId` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Made the column `giftId` on table `Challenge` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."CoinType" AS ENUM ('TAG', 'SHARE', 'GAME');

-- CreateEnum
CREATE TYPE "public"."TransactionSource" AS ENUM ('TAG_SCAN', 'SOCIAL_SHARE', 'GAME_PLAY', 'CHALLENGE_ENTRY', 'GIFT_REWARD', 'ADMIN_ADJUSTMENT');

-- DropForeignKey
ALTER TABLE "public"."Challenge" DROP CONSTRAINT "Challenge_giftId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Game" DROP CONSTRAINT "Game_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."GiftChallenge" DROP CONSTRAINT "GiftChallenge_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."GiftChallenge" DROP CONSTRAINT "GiftChallenge_giftId_fkey";

-- AlterTable
ALTER TABLE "public"."Challenge" ADD COLUMN     "gameId" TEXT NOT NULL,
ALTER COLUMN "giftId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Game" DROP COLUMN "challengeId",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "gdevelopProjectUrl" TEXT,
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "public"."Gift" ALTER COLUMN "currency" SET DEFAULT 'EUR';

-- DropTable
DROP TABLE "public"."GiftChallenge";

-- CreateTable
CREATE TABLE "public"."CoinBalance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tagCoins" INTEGER NOT NULL DEFAULT 0,
    "shareCoins" INTEGER NOT NULL DEFAULT 0,
    "gameCoins" INTEGER NOT NULL DEFAULT 0,
    "totalCoins" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoinBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CoinTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "public"."CoinType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "source" "public"."TransactionSource" NOT NULL,
    "sourceId" TEXT,
    "description" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoinTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChallengePass" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weekStart" TIMESTAMP(3) NOT NULL,
    "weekEnd" TIMESTAMP(3) NOT NULL,
    "tagCoins" INTEGER NOT NULL DEFAULT 0,
    "shareCoins" INTEGER NOT NULL DEFAULT 0,
    "gameCoins" INTEGER NOT NULL DEFAULT 0,
    "isEligible" BOOLEAN NOT NULL DEFAULT false,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "usedAt" TIMESTAMP(3),
    "challengeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengePass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoinBalance_userId_key" ON "public"."CoinBalance"("userId");

-- CreateIndex
CREATE INDEX "CoinBalance_userId_idx" ON "public"."CoinBalance"("userId");

-- CreateIndex
CREATE INDEX "CoinTransaction_userId_idx" ON "public"."CoinTransaction"("userId");

-- CreateIndex
CREATE INDEX "CoinTransaction_createdAt_idx" ON "public"."CoinTransaction"("createdAt");

-- CreateIndex
CREATE INDEX "ChallengePass_userId_idx" ON "public"."ChallengePass"("userId");

-- CreateIndex
CREATE INDEX "ChallengePass_weekStart_idx" ON "public"."ChallengePass"("weekStart");

-- CreateIndex
CREATE INDEX "ChallengePass_isEligible_idx" ON "public"."ChallengePass"("isEligible");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengePass_userId_weekStart_key" ON "public"."ChallengePass"("userId", "weekStart");

-- CreateIndex
CREATE UNIQUE INDEX "Challenge_giftId_key" ON "public"."Challenge"("giftId");

-- CreateIndex
CREATE UNIQUE INDEX "Challenge_gameId_key" ON "public"."Challenge"("gameId");

-- AddForeignKey
ALTER TABLE "public"."Challenge" ADD CONSTRAINT "Challenge_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "public"."Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Challenge" ADD CONSTRAINT "Challenge_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoinBalance" ADD CONSTRAINT "CoinBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoinTransaction" ADD CONSTRAINT "CoinTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChallengePass" ADD CONSTRAINT "ChallengePass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
