import React from "react";

import MyApp from "../pages/_app/app";
import { LayoutProps, LayoutWithThemeProps } from "../types";
import Header from "./header/header";
// import Footer from "./footer/footer";
import MetaHead from "./meta";
import { Box, Grid } from "@mui/material";

const Layout = ({ children, navigation, linkedinUrl }: LayoutProps) => (
	<div>
		<MetaHead />
		<Header navigation={navigation} linkedinUrl={linkedinUrl}/>
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
				<p>Ваш контент для aside здесь...</p>
			</Box>
			</Grid>
		</Grid>
		{/* TODO: Footer fix */}
		{/* <Footer /> */}
	</div>
);

const LayoutWithTheme: React.FC<LayoutWithThemeProps> = ({ ...props }) => (
	<MyApp Component={Layout} pageProps={{ ...props }} />
);

export default LayoutWithTheme;
