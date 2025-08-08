-- CreateEnum
CREATE TYPE "public"."CoinType" AS ENUM ('SCAN', 'SHARE', 'GAME', 'REFERRAL');

-- CreateEnum
CREATE TYPE "public"."TagStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "public"."ShareType" AS ENUM ('FACEBOOK', 'TWITTER', 'INSTAGRAM', 'WHATSAPP', 'TIKTOK');

-- CreateEnum
CREATE TYPE "public"."GameType" AS ENUM ('QUIZ', 'PUZZLE', 'REACTION', 'MUSIC');

-- CreateEnum
CREATE TYPE "public"."GameStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "public"."ChallengeStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'EXPIRED', 'CLAIMED');

-- CreateEnum
CREATE TYPE "public"."GiftType" AS ENUM ('COFFEE', 'DRINK', 'DISH', 'PIZZA', 'BOTTLE', 'DISCOUNT');

-- CreateEnum
CREATE TYPE "public"."GiftStatus" AS ENUM ('AVAILABLE', 'CLAIMED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "public"."VenueType" AS ENUM ('RESTAURANT', 'CAFE', 'BAR', 'CLUB', 'STORE', 'ORGANIZATION');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "auth0_id" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "avatar" TEXT,
    "phone_number" TEXT,
    "date_of_birth" TIMESTAMPTZ,
    "total_coins" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tenants" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT,
    "vat_number" TEXT,
    "legal_name" TEXT,
    "google_map" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "tiktok" TEXT,
    "website" TEXT,
    "logo" TEXT,
    "venue_type" "public"."VenueType" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tags" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "tenant_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "nfc_id" TEXT,
    "qr_code" TEXT,
    "location" TEXT,
    "status" "public"."TagStatus" NOT NULL DEFAULT 'ACTIVE',
    "scan_count" INTEGER NOT NULL DEFAULT 0,
    "max_scans_per_user" INTEGER NOT NULL DEFAULT 10,
    "coins_per_scan" INTEGER NOT NULL DEFAULT 10,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."scans" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expired_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "scans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."shares" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "social_type" "public"."ShareType" NOT NULL,
    "share_url" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."games" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "earn_coin" BOOLEAN NOT NULL DEFAULT true,
    "game_challenge" BOOLEAN NOT NULL DEFAULT false,
    "game_type" "public"."GameType" NOT NULL,
    "status" "public"."GameStatus" NOT NULL DEFAULT 'ACTIVE',
    "is_winner" BOOLEAN NOT NULL DEFAULT false,
    "coins_earned" INTEGER NOT NULL DEFAULT 0,
    "coins_spent" INTEGER NOT NULL DEFAULT 0,
    "game_data" JSONB,
    "game_url" TEXT,
    "game_image" TEXT,
    "game_title" TEXT,
    "game_description" TEXT,
    "started_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."coins" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "coin_type" "public"."CoinType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT,
    "scan_id" TEXT,
    "share_id" TEXT,
    "game_id" TEXT,
    "referral_id" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."challenges" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "tenant_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coin_scan_cost" INTEGER,
    "coin_share_cost" INTEGER,
    "coin_game_cost" INTEGER,
    "max_participants" INTEGER,
    "current_participants" INTEGER NOT NULL DEFAULT 0,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "status" "public"."ChallengeStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."challenge_participants" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "challenge_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "joined_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "challenge_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."gifts" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "tenant_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gift_type" "public"."GiftType" NOT NULL,
    "image_url" TEXT,
    "value" DECIMAL(10,2),
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" "public"."GiftStatus" NOT NULL DEFAULT 'AVAILABLE',
    "expires_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "user_id" TEXT,
    "challenge_id" TEXT,

    CONSTRAINT "gifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."referrals" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "referrer_id" TEXT NOT NULL,
    "referred_id" TEXT NOT NULL,
    "coins_earned" INTEGER NOT NULL DEFAULT 50,
    "bonus_coins" INTEGER NOT NULL DEFAULT 25,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."quiz_questions" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "game_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "quiz_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."quiz_answers" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "quiz_question_id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quiz_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_auth0_id_key" ON "public"."users"("auth0_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_email_key" ON "public"."tenants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tags_nfc_id_key" ON "public"."tags"("nfc_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_qr_code_key" ON "public"."tags"("qr_code");

-- CreateIndex
CREATE INDEX "tags_tenant_id_idx" ON "public"."tags"("tenant_id");

-- CreateIndex
CREATE INDEX "tags_nfc_id_idx" ON "public"."tags"("nfc_id");

-- CreateIndex
CREATE INDEX "tags_qr_code_idx" ON "public"."tags"("qr_code");

-- CreateIndex
CREATE INDEX "scans_user_id_idx" ON "public"."scans"("user_id");

-- CreateIndex
CREATE INDEX "scans_tag_id_idx" ON "public"."scans"("tag_id");

-- CreateIndex
CREATE INDEX "scans_created_at_idx" ON "public"."scans"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "scans_user_id_tag_id_created_at_key" ON "public"."scans"("user_id", "tag_id", "created_at");

-- CreateIndex
CREATE INDEX "shares_user_id_idx" ON "public"."shares"("user_id");

-- CreateIndex
CREATE INDEX "shares_tenant_id_idx" ON "public"."shares"("tenant_id");

-- CreateIndex
CREATE INDEX "shares_created_at_idx" ON "public"."shares"("created_at");

-- CreateIndex
CREATE INDEX "games_user_id_idx" ON "public"."games"("user_id");

-- CreateIndex
CREATE INDEX "games_game_challenge_idx" ON "public"."games"("game_challenge");

-- CreateIndex
CREATE INDEX "games_status_idx" ON "public"."games"("status");

-- CreateIndex
CREATE INDEX "games_created_at_idx" ON "public"."games"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "coins_scan_id_key" ON "public"."coins"("scan_id");

-- CreateIndex
CREATE UNIQUE INDEX "coins_share_id_key" ON "public"."coins"("share_id");

-- CreateIndex
CREATE UNIQUE INDEX "coins_game_id_key" ON "public"."coins"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "coins_referral_id_key" ON "public"."coins"("referral_id");

-- CreateIndex
CREATE INDEX "coins_user_id_idx" ON "public"."coins"("user_id");

-- CreateIndex
CREATE INDEX "coins_coin_type_idx" ON "public"."coins"("coin_type");

-- CreateIndex
CREATE INDEX "coins_created_at_idx" ON "public"."coins"("created_at");

-- CreateIndex
CREATE INDEX "challenges_tenant_id_idx" ON "public"."challenges"("tenant_id");

-- CreateIndex
CREATE INDEX "challenges_status_idx" ON "public"."challenges"("status");

-- CreateIndex
CREATE INDEX "challenges_start_date_end_date_idx" ON "public"."challenges"("start_date", "end_date");

-- CreateIndex
CREATE INDEX "challenge_participants_challenge_id_idx" ON "public"."challenge_participants"("challenge_id");

-- CreateIndex
CREATE INDEX "challenge_participants_user_id_idx" ON "public"."challenge_participants"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "challenge_participants_challenge_id_user_id_key" ON "public"."challenge_participants"("challenge_id", "user_id");

-- CreateIndex
CREATE INDEX "gifts_tenant_id_idx" ON "public"."gifts"("tenant_id");

-- CreateIndex
CREATE INDEX "gifts_status_idx" ON "public"."gifts"("status");

-- CreateIndex
CREATE INDEX "gifts_expires_at_idx" ON "public"."gifts"("expires_at");

-- CreateIndex
CREATE INDEX "gifts_user_id_idx" ON "public"."gifts"("user_id");

-- CreateIndex
CREATE INDEX "gifts_challenge_id_idx" ON "public"."gifts"("challenge_id");

-- CreateIndex
CREATE INDEX "referrals_referrer_id_idx" ON "public"."referrals"("referrer_id");

-- CreateIndex
CREATE INDEX "referrals_referred_id_idx" ON "public"."referrals"("referred_id");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_referrer_id_referred_id_key" ON "public"."referrals"("referrer_id", "referred_id");

-- CreateIndex
CREATE INDEX "quiz_questions_game_id_idx" ON "public"."quiz_questions"("game_id");

-- CreateIndex
CREATE INDEX "quiz_answers_quiz_question_id_idx" ON "public"."quiz_answers"("quiz_question_id");

-- AddForeignKey
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."scans" ADD CONSTRAINT "scans_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."scans" ADD CONSTRAINT "scans_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."shares" ADD CONSTRAINT "shares_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."shares" ADD CONSTRAINT "shares_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."games" ADD CONSTRAINT "games_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins" ADD CONSTRAINT "coins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins" ADD CONSTRAINT "coins_scan_id_fkey" FOREIGN KEY ("scan_id") REFERENCES "public"."scans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins" ADD CONSTRAINT "coins_share_id_fkey" FOREIGN KEY ("share_id") REFERENCES "public"."shares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins" ADD CONSTRAINT "coins_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."coins" ADD CONSTRAINT "coins_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "public"."referrals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."challenges" ADD CONSTRAINT "challenges_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."challenge_participants" ADD CONSTRAINT "challenge_participants_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."challenge_participants" ADD CONSTRAINT "challenge_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."gifts" ADD CONSTRAINT "gifts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."gifts" ADD CONSTRAINT "gifts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."gifts" ADD CONSTRAINT "gifts_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."referrals" ADD CONSTRAINT "referrals_referrer_id_fkey" FOREIGN KEY ("referrer_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."referrals" ADD CONSTRAINT "referrals_referred_id_fkey" FOREIGN KEY ("referred_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."quiz_questions" ADD CONSTRAINT "quiz_questions_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."quiz_answers" ADD CONSTRAINT "quiz_answers_quiz_question_id_fkey" FOREIGN KEY ("quiz_question_id") REFERENCES "public"."quiz_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
