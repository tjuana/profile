import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { HeaderMenuProps, NavigationItem } from "../../types";
import { IconButtonStyled, MenuStyled } from "./menu.styles";


const HeaderMenu: React.FC<HeaderMenuProps> = ({ pages }) => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const router = useRouter();
	const handleClickNavMenu = ({ href }: { href: string }) => {
		router.push(href);
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
				sx={IconButtonStyled}
				onClick={handleOpenNavMenu}
			>
				<MenuIcon />
			</IconButton>
			<Box sx={{ flexGrow: 0 }}>
			<Menu
				sx={MenuStyled}
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
				{pages && Object.values(pages)
				?.map(({ key, title, href }: NavigationItem) => (
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