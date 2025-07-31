import React, { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import { MaterialHeader } from './MaterialHeader';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <MaterialHeader />
      <Box component="main">
        <Toolbar /> {/* This creates space for the fixed AppBar */}
        {children}
      </Box>
    </Box>
  );
}
