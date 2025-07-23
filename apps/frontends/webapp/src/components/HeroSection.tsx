import { Button } from "@/components/ui/button";
import { Scan, Play, MapPin, Share2 } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark/60 via-gaming-dark/40 to-gaming-dark/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
            T4G
          </h1>
          <p className="text-2xl md:text-3xl text-neon-blue mb-4 font-semibold">
            Tag 4 Gift
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Scan tags at venues, play games, share content, and compete for real rewards. 
            The future of location-based gaming is here.
          </p>
        </div>
        
        {/* Main CTA */}
        <div className="animate-scale-in">
          <Button variant="scan" size="xl" className="mb-8">
            <Scan className="mr-2 h-6 w-6" />
            Start Scanning
          </Button>
        </div>
        
        {/* Feature Icons */}
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center animate-float">
            <div className="w-16 h-16 bg-gaming-card border border-neon-blue rounded-full flex items-center justify-center mb-2 mx-auto hover:shadow-glow-primary transition-all duration-300">
              <Play className="h-8 w-8 text-neon-blue" />
            </div>
            <p className="text-sm text-muted-foreground">Play Games</p>
          </div>
          
          <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-gaming-card border border-neon-purple rounded-full flex items-center justify-center mb-2 mx-auto hover:shadow-glow-secondary transition-all duration-300">
              <MapPin className="h-8 w-8 text-neon-purple" />
            </div>
            <p className="text-sm text-muted-foreground">Find Venues</p>
          </div>
          
          <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 bg-gaming-card border border-neon-green rounded-full flex items-center justify-center mb-2 mx-auto hover:shadow-glow-accent transition-all duration-300">
              <Share2 className="h-8 w-8 text-neon-green" />
            </div>
            <p className="text-sm text-muted-foreground">Share & Win</p>
          </div>
        </div>
      </div>
    </section>
  );
};