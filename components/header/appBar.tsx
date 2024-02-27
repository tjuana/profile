import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import HeaderMenu from './menu';
import BackgroundImage from '../backgroundImage';
import styles from './styles.module.css';

const AppBarButton = ({ navigation }) => {
	return (
	<Box sx={{ flexGrow: 1 }}>
		<BackgroundImage />
		<AppBar position="static" className={styles.appBar}>
			<Toolbar>
				{/* Логотип или иконка */}
				<AddReactionIcon sx={{ mr: 2 }} />

				{/* Название сайта */}
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				{/* https://www.youtube.com/watch?v=dQw4w9WgXcQ */}
					Vladislav Rogoza
				</Typography>

				{/* Навыки и ссылки */}
				<Button
					color="inherit"
					startIcon={<HomeIcon />}
					href={navigation?.['Home']?.href}
					>
					{navigation?.['Home']?.title || 'Home'}
				</Button>
				<Button
					color="inherit"
					startIcon={<InfoIcon />}
					href={navigation?.['About']?.href}
				>
					{navigation?.['About']?.title || 'About'}
				</Button>
				<Button
					color="inherit"
					startIcon={<WorkIcon />}
					href={navigation?.['Projects']?.href}
				>
					{navigation?.['Projects']?.title || 'Projects'}
				</Button>
				<HeaderMenu />
			</Toolbar>
		</AppBar>
	</Box>
	)
}

export default AppBarButton;