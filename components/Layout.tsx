import React from "react";

import MyApp from "../pages/_app/app";
import { LayoutProps, LayoutWithThemeProps } from "../types";
import Header from "./header/header";
// import Footer from "./footer/footer";
import MetaHead from "./meta";
import { Box, Grid, Typography } from "@mui/material";


const text = "👋 Welcome to my personal corner on the web! I'm Vladislav Rogoza, a passionate JavaScript Developer based in [Your Location]. With a strong background in React.js, TypeScript, and Node.js, I specialize in crafting seamless and user-friendly web experiences.\nExplore my portfolio to see the projects I've worked on, ranging from dynamic web applications to innovative solutions. From concept to code, I take pride in transforming ideas into reality.\n Let's build something great together! Feel free to reach out for collaboration or just to say hello. Happy coding!"
const Layout = ({ children, navigation, linkedinUrl }: LayoutProps) => (
	<div>
		<MetaHead />
		<Header navigation={navigation} linkedinUrl={linkedinUrl}/>
		<main>
			<Grid container>
				{/* Левая часть сетки, занимает 3/4 экрана на больших экранах и всю ширину на маленьких */}
				<Grid item xs={12} lg={9}>
				{children}
				</Grid>
				{/* Правая часть сетки, занимает 1/4 экрана на больших экранах */}
				<Grid item xs={12} lg={3}>
				<Box component="aside" sx={{ padding: 2 }}>
					{/* Ваша контентная часть для aside */}
					<h2>Правая часть экрана</h2>
					<Typography variant="body1">{text}</Typography>
				</Box>
				</Grid>
			</Grid>
		</main>
		{/* TODO: Footer fix */}
		{/* <Footer /> */}
	</div>
);

const LayoutWithTheme: React.FC<LayoutWithThemeProps> = ({ ...props }) => (
	<MyApp Component={Layout} pageProps={{ ...props }} />
);

export default LayoutWithTheme;
