import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const MotionButton = motion(MuiButton);

const GradientButton = styled(MotionButton)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
  color: '#ffffff',
  fontWeight: 600,
  borderRadius: '16px',
  padding: '12px 24px',
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #be185d 0%, #7c3aed 100%)',
    boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)',
    transform: 'translateY(-2px)',
  },
  '&.secondary': {
    background: 'linear-gradient(135deg, #a855f7 0%, #f59e0b 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #7c3aed 0%, #d97706 100%)',
      boxShadow: '0 8px 25px rgba(168, 85, 247, 0.4)',
    },
  },
  '&.accent': {
    background: 'linear-gradient(135deg, #f59e0b 0%, #10b981 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #d97706 0%, #059669 100%)',
      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
    },
  },
}));

interface MaterialButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outlined' | 'text';
  animate?: boolean;
}

export const MaterialButton: React.FC<MaterialButtonProps> = ({
  variant = 'primary',
  animate = true,
  children,
  className,
  ...props
}) => {
  const motionProps = animate ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {};

  if (variant === 'outlined' || variant === 'text') {
    return (
      <MotionButton
        variant={variant}
        className={className}
        {...motionProps}
        {...props}
        sx={{
          borderRadius: '16px',
          fontWeight: 600,
          textTransform: 'none',
          ...(variant === 'outlined' && {
            borderColor: '#ec4899',
            color: '#ec4899',
            '&:hover': {
              borderColor: '#be185d',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
            },
          }),
          ...props.sx,
        }}
      >
        {children}
      </MotionButton>
    );
  }

  return (
    <GradientButton
      className={`${variant} ${className || ''}`}
      {...motionProps}
      {...props}
    >
      {children}
    </GradientButton>
  );
};

export default MaterialButton;
