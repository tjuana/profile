// _app/app.tsx
import { useEffect, FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../utils/theme';
import { MyAppProps } from '../types/types';

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  // Applying the theme and global styles using CssBaseline
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
