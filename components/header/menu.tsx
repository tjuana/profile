import React, { ReactNode } from "react";
import { AppBar, Avatar, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import NextLink from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';

const pages = ['Products', 'Pricing', 'Blog'];
      {/* <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav> */}
const HeaderMenu = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

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
				sx={{ mr: 2 }}
				onClick={handleOpenNavMenu}
			>
				{/* <MenuIcon /> */}
				<Image src="/icon_vlad.png" alt="My Icon" width={33} height={33} />
			</IconButton>
			<Box sx={{ flexGrow: 0 }}>
			<Menu
				sx={{ mt: '45px' }}
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
				{pages.map((page) => (
				<MenuItem key={page} onClick={handleCloseNavMenu}>
					<Typography textAlign="center">{page}</Typography>
				</MenuItem>
				))}
			</Menu>

			</Box>
		</Toolbar>
	)
}

export default HeaderMenu;