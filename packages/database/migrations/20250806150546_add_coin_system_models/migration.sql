/*
  Warnings:

  - A unique constraint covering the columns `[auth0Id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."CoinType" AS ENUM ('TAG', 'SHARE', 'GAME');

-- CreateEnum
CREATE TYPE "public"."TransactionSource" AS ENUM ('TAG_SCAN', 'SOCIAL_SHARE', 'GAME_COMPLETION', 'GAME_PLAY', 'CHALLENGE_REWARD', 'CHALLENGE_PASS', 'ADMIN_ADJUSTMENT');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "auth0Id" TEXT;

-- CreateTable
CREATE TABLE "public"."CoinBalance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tagCoins" INTEGER NOT NULL DEFAULT 0,
    "shareCoins" INTEGER NOT NULL DEFAULT 0,
    "gameCoins" INTEGER NOT NULL DEFAULT 0,
    "totalCoins" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    "isEligible" BOOLEAN NOT NULL DEFAULT true,
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
CREATE INDEX "CoinTransaction_userId_idx" ON "public"."CoinTransaction"("userId");

-- CreateIndex
CREATE INDEX "CoinTransaction_createdAt_idx" ON "public"."CoinTransaction"("createdAt");

-- CreateIndex
CREATE INDEX "CoinTransaction_type_idx" ON "public"."CoinTransaction"("type");

-- CreateIndex
CREATE INDEX "ChallengePass_userId_idx" ON "public"."ChallengePass"("userId");

-- CreateIndex
CREATE INDEX "ChallengePass_weekStart_idx" ON "public"."ChallengePass"("weekStart");

-- CreateIndex
CREATE INDEX "ChallengePass_isUsed_idx" ON "public"."ChallengePass"("isUsed");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengePass_userId_weekStart_key" ON "public"."ChallengePass"("userId", "weekStart");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Id_key" ON "public"."User"("auth0Id");

-- AddForeignKey
ALTER TABLE "public"."CoinBalance" ADD CONSTRAINT "CoinBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoinTransaction" ADD CONSTRAINT "CoinTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChallengePass" ADD CONSTRAINT "ChallengePass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChallengePass" ADD CONSTRAINT "ChallengePass_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "public"."Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
