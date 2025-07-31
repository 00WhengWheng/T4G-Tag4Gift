import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
  Avatar,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { 
  PlayArrow, 
  People, 
  EmojiEvents, 
  Timer,
  Star,
  SportsCricket,
  MusicNote,
  Gamepad,
  DirectionsRun,
  Security
} from '@mui/icons-material';
import { useRef } from 'react';

const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const games = [
  {
    id: 1,
    title: "Flappy Bird",
    description: "Navigate through pipes in this classic arcade adventure",
    icon: <SportsCricket />,
    players: "24.5k",
    difficulty: "Easy",
    duration: "2-5 min",
    rating: 4.8,
    color: "#d946ef",
    gradient: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d946ef' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  {
    id: 2,
    title: "Music Rhythm",
    description: "Hit the beats and create amazing music combinations",
    icon: <MusicNote />,
    players: "18.2k",
    difficulty: "Medium",
    duration: "3-7 min",
    rating: 4.6,
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  {
    id: 3,
    title: "Road Cross",
    description: "Cross the busy road without getting hit by traffic",
    icon: <DirectionsRun />,
    players: "31.7k",
    difficulty: "Hard",
    duration: "1-3 min",
    rating: 4.9,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  {
    id: 4,
    title: "Shark Frenzy",
    description: "Survive the shark-infested waters in this thrilling adventure",
    icon: <Security />,
    players: "15.9k",
    difficulty: "Expert",
    duration: "5-10 min",
    rating: 4.7,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M20 0v20L0 0h20zm0 20v20l20-20H20z'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  {
    id: 5,
    title: "Puzzle Master",
    description: "Solve complex puzzles and challenge your mind",
    icon: <Gamepad />,
    players: "22.3k",
    difficulty: "Medium",
    duration: "10-15 min",
    rating: 4.5,
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Cpath d='M0 20h20v20H0zm20-20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  {
    id: 6,
    title: "Speed Runner",
    description: "Race against time in this fast-paced running game",
    icon: <Timer />,
    players: "28.1k",
    difficulty: "Easy",
    duration: "2-4 min",
    rating: 4.4,
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M20 20l-20 20h40z'/%3E%3C/g%3E%3C/svg%3E\")"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return '#10b981';
    case 'Medium': return '#f59e0b';
    case 'Hard': return '#ef4444';
    case 'Expert': return '#8b5cf6';
    default: return '#6b7280';
  }
};

export const AnimatedGamesSection: React.FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box 
      ref={ref}
      sx={{ 
        py: 10, 
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <MotionBox
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #d946ef20, #06b6d420)',
          zIndex: 0,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <MotionBox
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: 150,
          height: 150,
          borderRadius: '30%',
          background: 'linear-gradient(135deg, #10b98120, #f59e0b20)',
          zIndex: 0,
        }}
        animate={{
          rotate: [360, 0],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            🎮 Featured Games
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Choose your favorite game and start playing! Each game offers unique challenges and rewards.
          </Typography>
        </MotionBox>

        <MotionGrid
          container
          spacing={4}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <MotionCard
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: `0 25px 50px ${game.color}30`,
                }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: `linear-gradient(135deg, ${game.color}05 0%, ${theme.palette.background.paper} 100%)`,
                  border: `2px solid ${game.color}20`,
                  borderRadius: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: game.gradient,
                    zIndex: 1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: game.bgPattern,
                    opacity: 0.1,
                    zIndex: 0,
                  },
                }}
              >
                {/* Header */}
                <Box 
                  sx={{ 
                    p: 3, 
                    position: 'relative', 
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: game.gradient,
                        color: '#ffffff',
                        '& svg': {
                          fontSize: '2rem',
                        },
                      }}
                    >
                      {game.icon}
                    </Avatar>
                  </motion.div>
                  
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.secondary,
                        fontFamily: 'Inter, sans-serif',
                        mb: 1,
                      }}
                    >
                      {game.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{
                            fontSize: '1rem',
                            color: i < Math.floor(game.rating) ? '#fbbf24' : '#e5e7eb',
                          }}
                        />
                      ))}
                      <Typography variant="body2" sx={{ ml: 1, color: theme.palette.text.secondary }}>
                        {game.rating}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, p: 3, pt: 0, position: 'relative', zIndex: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {game.description}
                  </Typography>

                  {/* Stats */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    <Chip
                      icon={<People />}
                      label={`${game.players} players`}
                      size="small"
                      sx={{
                        backgroundColor: `${game.color}15`,
                        color: game.color,
                        fontWeight: 600,
                        '& .MuiChip-icon': {
                          color: game.color,
                        },
                      }}
                    />
                    <Chip
                      icon={<Timer />}
                      label={game.duration}
                      size="small"
                      sx={{
                        backgroundColor: `${game.color}15`,
                        color: game.color,
                        fontWeight: 600,
                        '& .MuiChip-icon': {
                          color: game.color,
                        },
                      }}
                    />
                    <Chip
                      label={game.difficulty}
                      size="small"
                      sx={{
                        backgroundColor: `${getDifficultyColor(game.difficulty)}15`,
                        color: getDifficultyColor(game.difficulty),
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  {/* Play Button */}
                  <Box sx={{ mt: 'auto' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<PlayArrow />}
                        sx={{
                          background: game.gradient,
                          color: '#ffffff',
                          fontWeight: 700,
                          py: 1.5,
                          fontFamily: 'Inter, sans-serif',
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          '&:hover': {
                            background: game.gradient,
                            opacity: 0.9,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Play Now
                      </Button>
                    </motion.div>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </MotionGrid>
      </Container>
    </Box>
  );
};

export default AnimatedGamesSection;
