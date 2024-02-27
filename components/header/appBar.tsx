import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import HeaderMenu from './menu';
import BackgroundImage from '../backgroundImage';
import styles from './styles.module.css';
import api from '../../utils/axios';

const AppBarButton = () => {

	return (
	<Box sx={{ flexGrow: 1 }}>
		<BackgroundImage />
		<AppBar position="static" className={styles.appBar}>
			<Toolbar>
				{/* Логотип или иконка */}
				<AddReactionIcon sx={{ mr: 2 }} />

				{/* Название сайта */}
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Ваше Имя
				</Typography>

				{/* Навыки и ссылки */}
				<Button color="inherit" startIcon={<WebIcon />}>
				Frontend
				</Button>
				<Button color="inherit" startIcon={<LanguageIcon />}>
				React
				</Button>
				<HeaderMenu />
			</Toolbar>
		</AppBar>
	</Box>
	)
}

export async function getStaticProps() {
    try {
      // Make a GET request to the specified apiUrl
      const result = await api.get('/api/navigation');
      // Pass the data to the component props
      return {
        props: {
          data: result,
        },
      };
    } catch (error) {
      // Handle errors
      console.error('Failed to fetch navigation data' || 'API Error:', error);
  
      // Pass an empty data prop and custom error text in case of an error
      return {
        props: {
          data: null,
          errorText: 'Failed to fetch navigation data' || "Failed to fetch data",
        },
      };
  }
}

export default AppBarButton;