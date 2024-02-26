import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import HeaderMenu from './menu';
import BackgroundImage from '../backgroundImage';

const AppBarButton = () => {

	return (
	<Box sx={{ flexGrow: 1 }}>
		<BackgroundImage />
		<AppBar position="static">
			<Toolbar>
				{/* Логотип или иконка */}
				<CodeIcon sx={{ mr: 2 }} />

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

export default AppBarButton;