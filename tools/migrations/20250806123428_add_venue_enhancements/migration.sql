/*
  Warnings:

  - You are about to drop the column `auth0Id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ChallengePass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CoinBalance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CoinTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ChallengePass" DROP CONSTRAINT "ChallengePass_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CoinBalance" DROP CONSTRAINT "CoinBalance_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CoinTransaction" DROP CONSTRAINT "CoinTransaction_userId_fkey";

-- DropIndex
DROP INDEX "public"."User_auth0Id_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "auth0Id";

-- DropTable
DROP TABLE "public"."ChallengePass";

-- DropTable
DROP TABLE "public"."CoinBalance";

-- DropTable
DROP TABLE "public"."CoinTransaction";

-- DropEnum
DROP TYPE "public"."CoinType";

-- DropEnum
DROP TYPE "public"."TransactionSource";
