import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  QrCodeScanner, 
  Share, 
  Games,
  Person,
  CardGiftcard
} from '@mui/icons-material';

const MotionAppBar = motion(AppBar);
const MotionIconButton = motion(IconButton);

export const MaterialHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <MotionAppBar
      position="fixed"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{
        background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Logo Section - Left */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 1.5,
            }}
          >
            {/* Logo Icon */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.9)', // White background
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              <CardGiftcard 
                sx={{ 
                  color: '#000000', 
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }} 
              />
            </Box>
            
            {/* Logo Text */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#ffffff', // White
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '4px 12px',
                borderRadius: '20px',
                border: '2px solid #ffffff',
              }}
            >
              Tag4Gift
            </Typography>
          </Box>
        </motion.div>

        {/* Center Navigation - 3 Icon Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <MotionIconButton
            component={Link}
            to="/scan"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)', // White background
              color: '#000000',
              borderRadius: '16px',
              width: 50,
              height: 50,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '2px solid #000000',
              '&:hover': {
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            <QrCodeScanner sx={{ fontSize: '2rem', fontWeight: 900, color: '#d946ef' }} />
          </MotionIconButton>

          <MotionIconButton
            component={Link}
            to="/share"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)', // White background
              color: '#000000',
              borderRadius: '16px',
              width: 50,
              height: 50,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '2px solid #000000',
              '&:hover': {
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            <Share sx={{ fontSize: '2rem', fontWeight: 900, color: '#06b6d4' }} />
          </MotionIconButton>

          <MotionIconButton
            component={Link}
            to="/games"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)', // White background
              color: '#000000',
              borderRadius: '16px',
              width: 50,
              height: 50,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '2px solid #000000',
              '&:hover': {
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            <Games sx={{ fontSize: '2rem', fontWeight: 900, color: '#10b981' }} />
          </MotionIconButton>
        </Box>

        {/* Profile Section - Right */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Small Gift Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CardGiftcard
              sx={{
                color: '#ffffff',
                fontSize: '1.2rem',
                filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))'
              }}
            />
          </motion.div>

          {/* Profile Icon */}
          <MotionIconButton
            component={Link}
            to="/profile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)', // White background
              color: '#000000',
              borderRadius: '50%',
              width: 45,
              height: 45,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              border: '3px solid #000000',
              '&:hover': {
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            <Person sx={{ fontSize: '1.3rem', fontWeight: 'bold' }} />
          </MotionIconButton>
        </Box>
      </Toolbar>
    </MotionAppBar>
  );
};

export default MaterialHeader;
