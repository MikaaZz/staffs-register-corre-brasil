'use client';
import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#26395a',
      light: '#dae3f2',
      dark: '#26535a',
    },
    secondary: {
      main: '#a0cb47',
      light: '#eaf2da',
      dark: '#b28c3e',
    },
    background: {
      default: '#f6f6f6',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 12,
    htmlFontSize: 16,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.55rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1.15rem',
    },
    subtitle1: {
      fontSize: '0.8rem',
    },
    subtitle2: {
      fontSize: '0.7rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '.9rem',
    },
    button: {
      fontSize: '1.2rem',
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          
        },
      },
      defaultProps: {
        fullWidth: true,
      }
    },
  },
});
