import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import HeaderMenu from './Menu';
import BackgroundImage from '../BackgroundImage';
import NavigationButtons from './buttons';
import { Navigation } from '../../types';

import { BoxStyles, addReactionIconStyles, appBarStyles, siteNameStyles } from './styles';

const Header = ({ navigation, linkedinUrl }: { navigation?: Navigation, linkedinUrl?: string }) => {
	// TODO: add rout for link from mongo
	const handleClick = () => {
		window.open(linkedinUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
	};

	return(
		<Box sx={BoxStyles}>
			<BackgroundImage />
			<AppBar position="static" sx={appBarStyles}>
				<Toolbar>
				{/* Logo or icon */}
				<AddReactionIcon
					sx={addReactionIconStyles}
					onClick={handleClick}
				/>
				{/* Site name as a clickable link */}
				{/* TODO: from mongodb */}
				<Typography variant="h6" component="div" sx={siteNameStyles}>
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
