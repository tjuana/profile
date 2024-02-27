import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button, Hidden } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import { useRouter } from 'next/router';

const iconList = {
	['Home']: <HomeIcon />,
	['About']: <InfoIcon />,
	['Projects']: <WorkIcon />,
	// Добавьте другие иконки по необходимости
};

const NavigationButtons = ({ navigation }) => {
	const router = useRouter();

	const handleClick = useCallback((href) => {
		router.push(href || '/');
	}, [router]);

  return (
	<Hidden mdDown>
	  {/* Display only on devices with resolution greater than or equal to "md" */}
	  {navigation?.map(({ key, href, title }) => (
		<Button
			key={key}
			color="inherit"
			startIcon={iconList[title] || null}
			onClick={() => handleClick(href)}
		>
			{title}
		</Button>
	  ))}
	</Hidden>
  );
};

export default NavigationButtons;
