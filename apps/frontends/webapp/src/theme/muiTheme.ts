import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d946ef', // Magenta
      light: '#e879f9',
      dark: '#a21caf',
      contrastText: '#000000',
    },
    secondary: {
      main: '#06b6d4', // Blue/cyan
      light: '#22d3ee',
      dark: '#0891b2',
      contrastText: '#000000',
    },
    background: {
      default: '#f8fafc', // Light background
      paper: '#ffffff',
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#1e293b', // Dark secondary text
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#10b981', // Green
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        'sans-serif'
      ].join(','),
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 800,
          fontFamily: 'Inter, sans-serif',
          borderRadius: 20,
          padding: '12px 24px',
          boxShadow: 'none',
          color: '#000000',
          background: 'rgba(251, 191, 36, 0.9)',
          border: '2px solid #000000',
          '&:hover': {
            background: 'rgba(251, 191, 36, 1)',
            boxShadow: '0 6px 20px rgba(251, 191, 36, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #d946ef 0%, #06b6d4 50%, #10b981 100%)',
          color: '#fbbf24',
          fontWeight: 800,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          '&:hover': {
            background: 'linear-gradient(135deg, #a21caf 0%, #0891b2 50%, #059669 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          borderRadius: 20,
          border: '1px solid rgba(148, 163, 184, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
        colorPrimary: {
          background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
          color: '#ffffff',
        },
      },
    },
  },
});

export default muiTheme;
