import { HeroSection } from "@/components/HeroSection";
import { GameCardsSection } from "@/components/GameCardsSection";
import { VenueMapSection } from "@/components/VenueMapSection";
import { SocialShareSection } from "@/components/SocialShareSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GameCardsSection />
      <VenueMapSection />
      <SocialShareSection />
      <LeaderboardSection />
    </div>
  );
};

export default Index;
