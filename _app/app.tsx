import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const MyApp = ({ Component, pageProps }) => {
	// Здесь будет код для создания темы
	const theme = createTheme({
	  // Настройки темы
	  palette: {
		primary: {
		  main: '#2196f3', // Основной цвет
		},
		secondary: {
		  main: '#f50057', // Вторичный цвет
		},
	  },
	  // Другие настройки темы...
	});
  
	// Применение темы и глобальных стилей с помощью CssBaseline
	useEffect(() => {
	  const jssStyles = document.querySelector('#jss-server-side');
	  if (jssStyles) {
		jssStyles.parentElement.removeChild(jssStyles);
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
  