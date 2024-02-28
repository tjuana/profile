import React from "react";
import { keyframes } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { HeaderMenuProps, NavigationItem } from "../../types";

const pulse = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
`;

const HeaderMenu: React.FC<HeaderMenuProps> = ({ pages }) => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const router = useRouter();
	const handleClickNavMenu = ({ href }: { href: string }) => {
		// Переход по ссылке
		router.push(href);
		// Закрытие меню или выполнение других действий при необходимости
		setAnchorElNav(null);
	};

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Toolbar>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{
					animation: `${pulse} 1s infinite`,
				}}
				// style={{ transform: anchorElNav ? 'rotate(180deg)' : 'rotate(0)' }}
				onClick={handleOpenNavMenu}
			>
				<MenuIcon />
				{/* <Image src="/icon_vlad.png" alt="My Icon" width={33} height={33} /> */}
			</IconButton>
			<Box sx={{ flexGrow: 0 }}>
			<Menu
				sx={{
					mt: '45px',
					animation: `fade-in 0.5s ease-in-out`,
				}}
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
			>
				{pages && Object.values(pages)?.map(({ key, title, href }: NavigationItem) => (
					<MenuItem key={key} onClick={() => handleClickNavMenu({ href })}>
						<Typography textAlign="center">{title}</Typography>
					</MenuItem>
				))}
			</Menu>

			</Box>
		</Toolbar>
	)
}

export default HeaderMenu;