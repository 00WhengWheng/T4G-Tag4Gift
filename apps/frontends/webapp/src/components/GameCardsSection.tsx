import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Trophy, Users, Target } from "lucide-react";
import gameCard1 from "@/assets/game-card-1.jpg";
import gameCard2 from "@/assets/game-card-2.jpg";
import gameCard3 from "@/assets/game-card-3.jpg";

const gameCards = [
  {
    id: 1,
    title: "Challenge Mode",
    description: "Complete gaming challenges and compete with friends",
    image: gameCard1,
    icon: Target,
    color: "neon-blue",
    players: "12.4k",
    rewards: "Epic Rewards"
  },
  {
    id: 2,
    title: "Social Share",
    description: "Share content and earn points for viral posts",
    image: gameCard2,
    icon: Users,
    color: "neon-purple",
    players: "8.9k",
    rewards: "Influence Points"
  },
  {
    id: 3,
    title: "AR Scanner",
    description: "Scan QR codes at venues to unlock exclusive games",
    image: gameCard3,
    icon: Play,
    color: "neon-green",
    players: "15.2k",
    rewards: "Location Bonuses"
  }
];

export const GameCardsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Game Modes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your adventure. Each mode offers unique rewards and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCards.map((game, index) => (
            <Card 
              key={game.id} 
              className="bg-gaming-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gaming hover:scale-105 group animate-slide-up"
            >
              <CardHeader 
                className="relative overflow-hidden rounded-t-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${game.image})`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                </div>
                <div className="relative z-10 pt-32">
                  <div className={`w-12 h-12 bg-gaming-surface border border-${game.color} rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300`}>
                    <game.icon className={`h-6 w-6 text-${game.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-foreground mb-2">
                    {game.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {game.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-neon-blue" />
                    <span className="text-foreground">{game.players} players</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-neon-orange" />
                    <span className="text-foreground">{game.rewards}</span>
                  </div>
                </div>
                
                <Button variant="primary" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};