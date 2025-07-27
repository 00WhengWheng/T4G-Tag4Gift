import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Crown, TrendingUp } from "lucide-react";

const topPlayers = [
  {
    rank: 1,
    name: "GamingLegend_99",
    points: 15420,
    level: 87,
    streak: 45,
    badge: "Elite Champion"
  },
  {
    rank: 2,
    name: "SocialMaster_Pro",
    points: 14890,
    level: 84,
    streak: 38,
    badge: "Viral King"
  },
  {
    rank: 3,
    name: "VenueHunter_X",
    points: 13750,
    level: 81,
    streak: 42,
    badge: "Explorer"
  },
  {
    rank: 4,
    name: "ChallengeSeeker",
    points: 12340,
    level: 76,
    streak: 29,
    badge: "Challenger"
  },
  {
    rank: 5,
    name: "RewardCollector",
    points: 11890,
    level: 73,
    streak: 35,
    badge: "Collector"
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return Crown;
    case 2: return Trophy;
    case 3: return Medal;
    default: return Award;
  }
};

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1: return 'neon-orange';
    case 2: return 'neon-blue';
    case 3: return 'neon-purple';
    default: return 'neon-green';
  }
};

export const LeaderboardSection = () => {
  return (
    <section className="py-20 px-4 bg-gaming-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how you stack up against the best players in the T4G community.
          </p>
        </div>
        
        <Card className="bg-gaming-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-neon-orange" />
              Top Players This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPlayers.map((player, index) => {
              const RankIcon = getRankIcon(player.rank);
              const rankColor = getRankColor(player.rank);
              
              return (
                <div 
                  key={player.rank} 
                  className="flex items-center gap-4 p-4 bg-gaming-surface rounded-lg hover:bg-gaming-surface/80 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Rank */}
                  <div className={`w-12 h-12 bg-gaming-card border border-${rankColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <RankIcon className={`h-6 w-6 text-${rankColor}`} />
                  </div>
                  
                  {/* Player Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-foreground text-lg">{player.name}</span>
                      <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                        {player.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Level {player.level}</span>
                      <span>•</span>
                      <span>{player.streak} day streak</span>
                    </div>
                  </div>
                  
                  {/* Points */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neon-blue">
                      {player.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              );
            })}
            
            {/* User's Position */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4 p-4 bg-gradient-primary/10 rounded-lg border border-primary/30">
                <div className="w-12 h-12 bg-primary/20 border border-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">#47</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-foreground text-lg">You</span>
                    <Badge variant="outline" className="border-primary text-primary">
                      Rising Star
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Level 34</span>
                    <span>•</span>
                    <span>12 day streak</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    4,567
                  </div>
                  <div className="text-sm text-muted-foreground">points</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};