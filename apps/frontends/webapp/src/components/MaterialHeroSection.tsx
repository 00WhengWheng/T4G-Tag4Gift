import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { QrCodeScanner, Games, Place, Share } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionCard = motion(Card);

const features = [
  {
    icon: <Games />,
    title: 'Play Games',
    description: 'Unlock gaming experiences',
    color: '#d946ef', // Magenta
    delay: 0,
  },
  {
    icon: <Place />,
    title: 'Find Venues',
    description: 'Discover amazing locations',
    color: '#06b6d4', // Blue/Cyan
    delay: 0.2,
  },
  {
    icon: <Share />,
    title: 'Share & Win',
    description: 'Compete for real rewards',
    color: '#10b981', // Green
    delay: 0.4,
  },
];

export const MaterialHeroSection: React.FC = () => {
  const theme = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default} 0%, 
          ${theme.palette.background.paper} 50%, 
          ${theme.palette.background.default} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}
    >
      {/* Animated Background Elements */}
      <MotionBox
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ec4899, #a855f7)',
          opacity: 0.1,
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
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
          bottom: '20%',
          right: '15%',
          width: 150,
          height: 150,
          borderRadius: '30%',
          background: 'linear-gradient(135deg, #a855f7, #f59e0b)',
          opacity: 0.08,
          zIndex: 0,
        }}
        animate={{
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          {/* Main Title */}
          <MotionTypography
            variant="h1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'backOut' }}
            sx={{
              background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 800,
              fontSize: { xs: '4rem', md: '6rem', lg: '8rem' },
              lineHeight: 0.9,
              mb: 2,
              textShadow: '0 0 30px rgba(217, 70, 239, 0.3)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            T4G
          </MotionTypography>

          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            sx={{
              color: '#fbbf24', // Yellow
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
              mb: 3,
              fontFamily: 'Inter, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Tag 4 Gift
          </MotionTypography>

          <MotionTypography
            variant="body1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Scan tags at venues, play games, share content, and compete for real rewards. 
            The future of location-based gaming is here.
          </MotionTypography>

          {/* Main CTA Button */}
          <MotionButton
            variant="contained"
            size="large"
            startIcon={<QrCodeScanner />}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            sx={{
              fontSize: '1.2rem',
              py: 2,
              px: 4,
              mb: 6,
            }}
          >
            Start Scanning
          </MotionButton>
        </MotionBox>

        {/* Feature Cards */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + feature.delay, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 35px rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.3)`,
                }}
                sx={{
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
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
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}aa)`,
                  },
                }}
              >
                <CardContent>
                  <MotionBox
                    sx={{
                      color: feature.color,
                      mb: 2,
                      '& svg': {
                        fontSize: '3rem',
                      },
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </MotionBox>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MaterialHeroSection;
