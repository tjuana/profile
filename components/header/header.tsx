import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import HeaderMenu from './menu';
import BackgroundImage from '../backgroundImage';
import NavigationButtons from './buttons';
import styles from './styles.module.css';

const AppBarButton = ({ navigation }) => (
	<Box sx={{ flexGrow: 1 }}>
		<BackgroundImage />
		<AppBar position="static" className={styles.appBar}>
			<Toolbar>
			{/* Logo or icon */}
			<AddReactionIcon sx={{ mr: 2 }} />
			{/* Site name */}
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				{/* https://www.youtube.com/watch?v=dQw4w9WgXcQ */}
				Vladislav Rogoza
			</Typography>

			{/* Navigation buttons */}
			<NavigationButtons navigation={navigation} />

			{/* Always display in mobile view */}
			<HeaderMenu pages={navigation} />
			</Toolbar>
		</AppBar>
	</Box>
);

export default AppBarButton;
