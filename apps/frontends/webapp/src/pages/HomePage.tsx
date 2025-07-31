import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  Avatar,
  Chip,
  Button,
  IconButton,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  QrCodeScanner, 
  Gamepad, 
  LocalOffer, 
  Groups, 
  Business, 
  SportsEsports, 
  Share,
  Place,
  EmojiEvents,
  PlayArrow,
  MusicNote,
  DirectionsRun,
  Security,
  Adjust,
  Timer,
  Star,
  People,
  TrendingUp,
  LocationOn,
  PhotoCamera,
  Restaurant,
  LocalBar,
  Hotel
} from '@mui/icons-material';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

// Mixed content data for the asymmetrical grid
const gridItems = [
  // Games
  {
    id: 'game-1',
    type: 'game',
    title: 'Flappy Bird',
    subtitle: 'Classic Arcade',
    description: 'Navigate through pipes',
    icon: <SportsEsports />,
    players: '24.5k',
    rating: 4.8,
    color: '#d946ef',
    gradient: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
    size: 'large', // Takes 2 columns on mobile
  },
  {
    id: 'venue-1',
    type: 'venue',
    title: 'Sunset Café',
    subtitle: 'Downtown',
    description: '15 active challenges',
    icon: <Restaurant />,
    rating: 4.6,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    size: 'medium',
  },
  {
    id: 'challenge-1',
    type: 'challenge',
    title: 'Photo Hunt',
    subtitle: 'Weekly Challenge',
    description: 'Find 5 hidden spots',
    icon: <PhotoCamera />,
    progress: 60,
    reward: '500 pts',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    size: 'medium',
  },
  {
    id: 'social-1',
    type: 'social',
    title: 'Viral Post',
    subtitle: 'Top Share',
    description: 'Amazing sunset view',
    icon: <Share />,
    likes: '2.3k',
    shares: '847',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    size: 'small',
  },
  {
    id: 'game-2',
    type: 'game',
    title: 'Music Rhythm',
    subtitle: 'Beat Master',
    description: 'Hit the perfect beats',
    icon: <MusicNote />,
    players: '18.2k',
    rating: 4.6,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    size: 'medium',
  },
  {
    id: 'venue-2',
    type: 'venue',
    title: 'Sports Bar',
    subtitle: 'Stadium District',
    description: '8 games available',
    icon: <LocalBar />,
    rating: 4.4,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    size: 'small',
  },
  {
    id: 'challenge-2',
    type: 'challenge',
    title: 'Speed Run',
    subtitle: 'Daily Challenge',
    description: 'Complete in 2 minutes',
    icon: <Timer />,
    progress: 80,
    reward: '1000 pts',
    color: '#d946ef',
    gradient: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
    size: 'large',
  },
  {
    id: 'social-2',
    type: 'social',
    title: 'Team Victory',
    subtitle: 'Group Achievement',
    description: 'Epic gaming session',
    icon: <EmojiEvents />,
    likes: '5.1k',
    shares: '1.2k',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    size: 'medium',
  },
  {
    id: 'venue-3',
    type: 'venue',
    title: 'Hotel Lobby',
    subtitle: 'City Center',
    description: '12 exclusive games',
    icon: <Hotel />,
    rating: 4.9,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    size: 'medium',
  },
  {
    id: 'game-3',
    type: 'game',
    title: 'Road Cross',
    subtitle: 'Action Adventure',
    description: 'Dodge the traffic',
    icon: <DirectionsRun />,
    players: '31.7k',
    rating: 4.9,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    size: 'small',
  },
];

const HomePage = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getCardHeight = (size: string) => {
    switch (size) {
      case 'small': return { xs: 160, sm: 180 };
      case 'medium': return { xs: 200, sm: 220 };
      case 'large': return { xs: 240, sm: 280 };
      default: return { xs: 200, sm: 220 };
    }
  };

  const getGridSize = (size: string) => {
    switch (size) {
      case 'small': return { xs: 6, sm: 4, md: 3 };
      case 'medium': return { xs: 6, sm: 4, md: 4 };
      case 'large': return { xs: 12, sm: 8, md: 6 };
      default: return { xs: 6, sm: 4, md: 4 };
    }
  };

  const renderCardContent = (item: any) => {
    switch (item.type) {
      case 'game':
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background: item.gradient,
                  '& svg': { fontSize: '1.5rem' }
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.85rem' }}>
              {item.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Chip
                icon={<People />}
                label={`${item.players}`}
                size="small"
                sx={{ fontSize: '0.7rem', height: 24 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Star sx={{ fontSize: '0.9rem', color: '#fbbf24' }} />
                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {item.rating}
                </Typography>
              </Box>
            </Box>
            
            <Button
              variant="contained"
              fullWidth
              startIcon={<PlayArrow />}
              sx={{
                background: item.gradient,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                py: 1,
              }}
            >
              Play
            </Button>
          </>
        );
        
      case 'venue':
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background: item.gradient,
                  '& svg': { fontSize: '1.5rem' }
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.85rem' }}>
              {item.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Star sx={{ fontSize: '0.9rem', color: '#fbbf24' }} />
                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#64748b' }}>
                  {item.rating}
                </Typography>
              </Box>
              <IconButton
                sx={{
                  background: item.gradient,
                  color: '#ffffff',
                  width: 36,
                  height: 36,
                  '&:hover': { background: item.gradient, opacity: 0.9 }
                }}
              >
                <LocationOn sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>
          </>
        );
        
      case 'challenge':
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background: item.gradient,
                  '& svg': { fontSize: '1.5rem' }
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.85rem' }}>
              {item.description}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Progress
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600, color: item.color }}>
                  {item.progress}%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: 6,
                  backgroundColor: '#e2e8f0',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${item.progress}%`,
                    height: '100%',
                    background: item.gradient,
                    transition: 'width 0.3s ease',
                  }}
                />
              </Box>
            </Box>
            
            <Chip
              label={item.reward}
              size="small"
              sx={{
                background: item.gradient,
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
          </>
        );
        
      case 'social':
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  background: item.gradient,
                  '& svg': { fontSize: '1.5rem' }
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.85rem' }}>
              {item.description}
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600, color: item.color }}>
                    ❤️ {item.likes}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600, color: item.color }}>
                    🔄 {item.shares}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                sx={{
                  background: item.gradient,
                  color: '#ffffff',
                  width: 36,
                  height: 36,
                  '&:hover': { background: item.gradient, opacity: 0.9 }
                }}
              >
                <TrendingUp sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <Box
        ref={ref}
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
          py: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Discover & Play
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Games, challenges, venues & social shares in one place
            </Typography>
          </MotionBox>

          {/* Asymmetrical Grid */}
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {gridItems.map((item, index) => (
              <Grid item {...getGridSize(item.size)} key={item.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 20px 40px ${item.color}20`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: getCardHeight(item.size),
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#ffffff',
                    border: `2px solid ${item.color}15`,
                    borderRadius: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: item.gradient,
                      zIndex: 1,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {renderCardContent(item)}
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default HomePage;
