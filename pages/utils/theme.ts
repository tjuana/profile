import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  // Palette settings for color scheme
  palette: {
    primary: {
      main: '#2196f3', // Main color
    },
    secondary: {
      main: '#f50057', // Secondary color
    },
    info: {
      main: '#00FF7F', // Kislotno-salatovyi (Acid salad) color
    },
    // Other palette settings...
  },
  
  // Typography settings for text
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      // Other h1 styles...
    },
    // Other typography settings...
  },

  // Spacing settings for margins and padding
  spacing: 8, // default spacing unit, can be customized

  // Breakpoints for responsive design
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // Components styles
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // Other component styles...
  },

  // Shadows for box shadows
  // TODO: add Example
  // shadows: [
  //   'none',
  //   '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.05)',
  //   // Other shadow options...
  // ],

  // Shape settings for borderRadius
  shape: {
    borderRadius: 8,
  },

  // Custom CSS for global style ?
});

export default theme;
