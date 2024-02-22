import React, { ReactNode } from "react";
import { AppBar, Avatar, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import HeaderMenu from "./menu";

const pages = ['Products', 'Pricing', 'Blog'];
      {/* <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav> */}
const AppBarButton = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static" color="info">
			<HeaderMenu />
		</AppBar>
	</Box>
	)
}

export default AppBarButton;