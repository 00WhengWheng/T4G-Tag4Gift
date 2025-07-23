import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Gift, Star } from "lucide-react";
import venueCard from "@/assets/venue-card.jpg";

const nearbyVenues = [
  {
    id: 1,
    name: "GameZone Arcade",
    distance: "0.2 km",
    rewards: "Epic Gaming Gear",
    rating: 4.8,
    activeGames: 12
  },
  {
    id: 2,
    name: "TechHub Café",
    distance: "0.5 km",
    rewards: "Premium Beverages",
    rating: 4.6,
    activeGames: 8
  },
  {
    id: 3,
    name: "Sports Arena",
    distance: "0.8 km",
    rewards: "Sports Equipment",
    rating: 4.9,
    activeGames: 15
  }
];

export const VenueMapSection = () => {
  return (
    <section className="py-20 px-4 bg-gaming-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Find Venues
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover participating venues near you and unlock exclusive rewards.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="bg-gaming-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="h-96 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${venueCard})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-card/80 via-transparent to-gaming-card/40" />
                  
                  {/* Interactive Map Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-neon-blue/20 border-2 border-neon-blue rounded-full flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
                        <MapPin className="h-10 w-10 text-neon-blue" />
                      </div>
                      <p className="text-foreground font-semibold">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Tap to explore venues</p>
                    </div>
                  </div>
                  
                  {/* Sample Location Pins */}
                  <div className="absolute top-6 left-8 w-6 h-6 bg-neon-green rounded-full animate-glow-pulse flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-12 right-12 w-6 h-6 bg-neon-purple rounded-full animate-glow-pulse flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-20 right-8 w-6 h-6 bg-neon-orange rounded-full animate-glow-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Venue List */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="neon" size="lg">
                <Navigation className="mr-2 h-5 w-5" />
                Find Nearby Venues
              </Button>
            </div>
            
            {nearbyVenues.map((venue, index) => (
              <Card 
                key={venue.id} 
                className="bg-gaming-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{venue.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-neon-orange fill-current" />
                      <span className="text-sm text-foreground">{venue.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-neon-blue" />
                      <span className="text-muted-foreground">{venue.distance} away</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="h-4 w-4 text-neon-green" />
                      <span className="text-muted-foreground">{venue.rewards}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-neon-purple">
                      {venue.activeGames} active games
                    </span>
                    <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-blue hover:bg-neon-blue/10">
                      Visit Venue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};