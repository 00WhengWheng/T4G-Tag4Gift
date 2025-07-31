import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { 
  Box, 
  Container, 
  Typography, 
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
  PlayArrow,
  MusicNote,
  DirectionsRun,
  Security,
  Timer,
  Star,
  People,
  TrendingUp,
  LocationOn,
  PhotoCamera,
  Restaurant,
  LocalBar,
  Hotel,
  EmojiEvents,
  Share,
  SportsEsports,
} from '@mui/icons-material';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

// All possible items
const allItems = [
  // Games
  { id: 'g1', type: 'game', title: '🐦 Flappy', emoji: '🎮', color: '#d946ef', players: '24k' },
  { id: 'g2', type: 'game', title: '🎵 Rhythm', emoji: '🎼', color: '#8b5cf6', players: '18k' },
  { id: 'g3', type: 'game', title: '🚗 Road Cross', emoji: '🎯', color: '#f59e0b', players: '31k' },
  { id: 'g4', type: 'game', title: '🦈 Shark Frenzy', emoji: '🌊', color: '#ef4444', players: '15k' },
  { id: 'g5', type: 'game', title: '🧩 Puzzle', emoji: '🔮', color: '#06b6d4', players: '22k' },
  { id: 'g6', type: 'game', title: '⚡ Speed Run', emoji: '💨', color: '#10b981', players: '28k' },
  
  // Challenges
  { id: 'c1', type: 'challenge', title: '📸 Photo Hunt', emoji: '🏆', color: '#10b981', progress: 60 },
  { id: 'c2', type: 'challenge', title: '⚡ Speed Task', emoji: '🏃', color: '#d946ef', progress: 80 },
  { id: 'c3', type: 'challenge', title: '🎯 Target Hit', emoji: '🎪', color: '#f59e0b', progress: 45 },
  { id: 'c4', type: 'challenge', title: '🔍 Scavenger', emoji: '🗺️', color: '#8b5cf6', progress: 30 },
  { id: 'c5', type: 'challenge', title: '🎨 Creative', emoji: '🖌️', color: '#06b6d4', progress: 90 },
  { id: 'c6', type: 'challenge', title: '🌟 Explorer', emoji: '🧭', color: '#ef4444', progress: 25 },
  
  // Social Shares
  { id: 's1', type: 'social', title: '🌅 Sunset View', emoji: '📱', color: '#f59e0b', likes: '2.3k' },
  { id: 's2', type: 'social', title: '🏆 Victory', emoji: '👥', color: '#06b6d4', likes: '5.1k' },
  { id: 's3', type: 'social', title: '🎉 Party Time', emoji: '🎈', color: '#d946ef', likes: '1.8k' },
  { id: 's4', type: 'social', title: '🏖️ Beach Day', emoji: '🌴', color: '#10b981', likes: '3.7k' },
  { id: 's5', type: 'social', title: '🍕 Food Trip', emoji: '🤤', color: '#ef4444', likes: '4.2k' },
  { id: 's6', type: 'social', title: '🎸 Live Music', emoji: '🎤', color: '#8b5cf6', likes: '6.5k' },
  
  // Venues
  { id: 'v1', type: 'venue', title: '☕ Sunset Café', emoji: '🏪', color: '#06b6d4', rating: 4.6 },
  { id: 'v2', type: 'venue', title: '🍺 Sports Bar', emoji: '🏟️', color: '#ef4444', rating: 4.4 },
  { id: 'v3', type: 'venue', title: '🏨 Hotel Lobby', emoji: '🌟', color: '#10b981', rating: 4.9 },
  { id: 'v4', type: 'venue', title: '🍕 Pizza Place', emoji: '🍽️', color: '#f59e0b', rating: 4.7 },
  { id: 'v5', type: 'venue', title: '🎬 Cinema', emoji: '🍿', color: '#8b5cf6', rating: 4.5 },
  { id: 'v6', type: 'venue', title: '🏋️ Gym', emoji: '💪', color: '#d946ef', rating: 4.3 },
];

const HomePage = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [scrollOffset, setScrollOffset] = useState(0);

  // Create extended array for infinite scrolling
  const extendedItems = [...allItems, ...allItems, ...allItems, ...allItems]; // 4x repetition

  // Get current 9 visible items (3x3 grid)
  const getVisibleItems = () => {
    const startIndex = scrollOffset;
    return extendedItems.slice(startIndex, startIndex + 9);
  };

  // Handle wheel scroll
  const handleWheel = (event: any) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 1 : -1;
    setScrollOffset(prev => {
      const newOffset = prev + delta;
      // Wrap around to create infinite scroll
      if (newOffset >= extendedItems.length - 9) return 0;
      if (newOffset < 0) return extendedItems.length - 10;
      return newOffset;
    });
  };

  useEffect(() => {
    const gridElement = document.getElementById('grid-container');
    if (gridElement) {
      gridElement.addEventListener('wheel', handleWheel, { passive: false });
      return () => gridElement.removeEventListener('wheel', handleWheel);
    }
  }, []);

  const renderCard = (item: any, index: number) => {
    // Calculate fade effect based on position
    const row = Math.floor(index / 3);
    const col = index % 3;
    const fadeOpacity = 
      (row === 0 || row === 2) || (col === 0 || col === 2) ? 0.7 : 1;

    return (
      <MotionCard
        key={`${item.id}-${scrollOffset}-${index}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: fadeOpacity,
          scale: fadeOpacity === 1 ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          scale: fadeOpacity === 1 ? 1.02 : 0.97,
          opacity: 1,
        }}
        sx={{
          height: 160,
          background: '#ffffff',
          border: `2px solid ${item.color}20`,
          borderRadius: 1,
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
            zIndex: 1,
          },
        }}
      >
        <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography sx={{ fontSize: '1.5rem' }}>{item.emoji}</Typography>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>
                {item.title}
              </Typography>
              <Typography variant="caption" sx={{ color: item.color, fontSize: '0.7rem', fontWeight: 600 }}>
                {item.type.toUpperCase()}
              </Typography>
            </Box>
          </Box>
          
          {item.type === 'game' && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Chip
                icon={<People />}
                label={item.players}
                size="small"
                sx={{ fontSize: '0.6rem', height: 20 }}
              />
              <IconButton size="small" sx={{ color: item.color }}>
                <PlayArrow sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>
          )}
          
          {item.type === 'challenge' && (
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#64748b' }}>
                  Progress
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600, color: item.color }}>
                  {item.progress}%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: 4,
                  backgroundColor: '#e2e8f0',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${item.progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                  }}
                />
              </Box>
            </Box>
          )}
          
          {item.type === 'social' && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600, color: item.color }}>
                ❤️ {item.likes}
              </Typography>
              <IconButton size="small" sx={{ color: item.color }}>
                <TrendingUp sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>
          )}
          
          {item.type === 'venue' && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Star sx={{ fontSize: '0.8rem', color: '#fbbf24' }} />
                <Typography variant="caption" sx={{ fontSize: '0.7rem', color: '#64748b' }}>
                  {item.rating}
                </Typography>
              </Box>
              <IconButton size="small" sx={{ color: item.color }}>
                <LocationOn sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>
          )}
        </CardContent>
      </MotionCard>
    );
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
              🎯 Discover & Play
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
              Scroll to explore • Games • Challenges • Social • Venues
            </Typography>
          </MotionBox>

          {/* 3x3 Grid Container */}
          <Box
            id="grid-container"
            sx={{
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              cursor: 'grab',
              userSelect: 'none',
              '&:active': {
                cursor: 'grabbing',
              },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: { xs: 2, sm: 3 },
                width: '100%',
              }}
            >
              {getVisibleItems().map((item, index) => renderCard(item, index))}
            </Box>
          </Box>

          {/* Scroll Hint */}
          <MotionBox
            sx={{ textAlign: 'center', mt: 4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#94a3b8',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
              }}
            >
              🖱️ Scroll to explore more
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default HomePage;
