import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import HeaderMenu from './Menu';
import BackgroundImage from '../BackgroundImage';
import styles from './styles.module.css';
import NavigationButtons from './buttons';
import { Navigation } from '../../types';

const Header = ({ navigation, linkedinUrl }: { navigation?: Navigation, linkedinUrl?: string }) => {
	// TODO: add rout for link from mongo
	const handleClick = () => {
		window.open(linkedinUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
	};

	return(
		<Box sx={{ flexGrow: 1 }}>
			<BackgroundImage />
			<AppBar position="static" className={styles.appBar}>
				<Toolbar>
				{/* Logo or icon */}
				<AddReactionIcon
					sx={{
						mr: 2,
						"&:hover": {
							cursor: "pointer"
						},}}
					onClick={handleClick}
				/>
				{/* Site name as a clickable link */}
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
};

export default Header;
