import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Heart, MessageCircle, TrendingUp, Instagram, Twitter, Facebook } from "lucide-react";

const socialPosts = [
  {
    id: 1,
    user: "@gamingpro_alex",
    content: "Just won Epic Gaming Gear at GameZone! 🎮 T4G is incredible!",
    likes: 234,
    comments: 18,
    platform: "instagram"
  },
  {
    id: 2,
    user: "@techsavvy_sam",
    content: "Scanned my 50th venue today! The rewards keep getting better 🚀",
    likes: 189,
    comments: 23,
    platform: "twitter"
  },
  {
    id: 3,
    user: "@social_butterfly",
    content: "Community challenge completed! Thanks to my T4G squad 💪",
    likes: 156,
    comments: 12,
    platform: "facebook"
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'instagram': return Instagram;
    case 'twitter': return Twitter;
    case 'facebook': return Facebook;
    default: return Share2;
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'instagram': return 'neon-purple';
    case 'twitter': return 'neon-blue';
    case 'facebook': return 'neon-green';
    default: return 'neon-blue';
  }
};

export const SocialShareSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Share & Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your achievements, connect with friends, and build your gaming community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Social Feed */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-neon-orange" />
              Community Spotlight
            </h3>
            
            {socialPosts.map((post, index) => {
              const PlatformIcon = getPlatformIcon(post.platform);
              const platformColor = getPlatformColor(post.platform);
              
              return (
                <Card 
                  key={post.id} 
                  className="bg-gaming-card border-border hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-gaming-surface border border-${platformColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <PlatformIcon className={`h-5 w-5 text-${platformColor}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">{post.user}</span>
                          <span className="text-xs text-muted-foreground">• 2h ago</span>
                        </div>
                        
                        <p className="text-foreground mb-4">{post.content}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 hover:text-neon-blue cursor-pointer transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 hover:text-neon-green cursor-pointer transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1 hover:text-neon-purple cursor-pointer transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span>Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Share Actions */}
          <div className="space-y-8">
            <Card className="bg-gradient-secondary border-0 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Share2 className="h-6 w-6" />
                  Share Your Victory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90">
                  Share your achievements and earn bonus points. The more viral your content, 
                  the bigger your rewards!
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="lg" className="bg-white/20 hover:bg-white/30 text-white border-0">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button variant="hero" size="lg" className="w-full mt-6">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Now
                </Button>
              </CardContent>
            </Card>
            
            {/* Stats Card */}
            <Card className="bg-gaming-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Your Social Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gaming-surface rounded-lg">
                    <div className="text-2xl font-bold text-neon-blue">1.2K</div>
                    <div className="text-sm text-muted-foreground">Total Likes</div>
                  </div>
                  <div className="text-center p-4 bg-gaming-surface rounded-lg">
                    <div className="text-2xl font-bold text-neon-green">89</div>
                    <div className="text-sm text-muted-foreground">Viral Posts</div>
                  </div>
                  <div className="text-center p-4 bg-gaming-surface rounded-lg">
                    <div className="text-2xl font-bold text-neon-purple">456</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gaming-surface rounded-lg">
                    <div className="text-2xl font-bold text-neon-orange">23</div>
                    <div className="text-sm text-muted-foreground">Level</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};