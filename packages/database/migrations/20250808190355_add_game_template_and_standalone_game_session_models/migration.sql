-- CreateTable
CREATE TABLE "public"."GameTemplate" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "public"."GameType" NOT NULL,
    "category" TEXT,
    "difficulty" TEXT,
    "structure" JSONB,
    "gdevelopProjectUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "GameTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StandaloneGameSession" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "timeSpent" INTEGER,
    "completedAt" TIMESTAMPTZ,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandaloneGameSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."StandaloneGameSession" ADD CONSTRAINT "StandaloneGameSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StandaloneGameSession" ADD CONSTRAINT "StandaloneGameSession_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "public"."GameTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
