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
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  PlayArrow,
  People,
  EmojiEvents,
  Adjust,
  Share,
  QrCodeScanner
} from '@mui/icons-material';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const gameCards = [
  {
    id: 1,
    title: "Challenge Mode",
    description: "Complete gaming challenges and compete with friends for epic rewards",
    icon: <Adjust />,
    color: "#d946ef",
    players: "12.4k",
    rewards: "Epic Rewards",
    gradient: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)"
  },
  {
    id: 2,
    title: "Social Share",
    description: "Share content and earn points for viral posts and social engagement",
    icon: <Share />,
    color: "#06b6d4",
    players: "8.9k",
    rewards: "Influence Points",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
  },
  {
    id: 3,
    title: "AR Scanner",
    description: "Scan QR codes at venues to unlock exclusive games and bonuses",
    icon: <QrCodeScanner />,
    color: "#10b981",
    players: "15.2k",
    rewards: "Location Bonuses",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
  }
];

export const MaterialGameCardsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Game Modes
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Choose your adventure. Each mode offers unique rewards and challenges.
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {gameCards.map((game, index) => (
            <Grid item xs={12} md={4} key={game.id}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 25px 50px rgba(${parseInt(game.color.slice(1, 3), 16)}, ${parseInt(game.color.slice(3, 5), 16)}, ${parseInt(game.color.slice(5, 7), 16)}, 0.4)`,
                }}
                sx={{
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: game.gradient,
                    zIndex: 1,
                  },
                }}
              >
                {/* Header with Icon */}
                <Box
                  sx={{
                    p: 3,
                    background: game.gradient,
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '20px',
                      background: theme.palette.background.paper,
                      borderRadius: '20px 20px 0 0',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, position: 'relative', zIndex: 1 }}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          '& svg': {
                            fontSize: '1.8rem',
                          },
                        }}
                      >
                        {game.icon}
                      </Box>
                    </motion.div>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'white',
                      }}
                    >
                      {game.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {game.description}
                  </Typography>

                  {/* Stats */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                    <Chip
                      icon={<People />}
                      label={`${game.players} players`}
                      size="small"
                      sx={{
                        backgroundColor: `${game.color}20`,
                        color: game.color,
                        '& .MuiChip-icon': {
                          color: game.color,
                        },
                      }}
                    />
                    <Chip
                      icon={<EmojiEvents />}
                      label={game.rewards}
                      size="small"
                      sx={{
                        backgroundColor: `${game.color}20`,
                        color: game.color,
                        '& .MuiChip-icon': {
                          color: game.color,
                        },
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
                          fontWeight: 600,
                          py: 1.5,
                          '&:hover': {
                            background: game.gradient,
                            opacity: 0.9,
                          },
                        }}
                      >
                        Play Now
                      </Button>
                    </motion.div>
                  </Box>
                </CardContent>

                {/* Animated Background Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `${game.color}10`,
                    zIndex: 0,
                  }}
                />
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MaterialGameCardsSection;
