import React from "react";

import MyApp from "../pages/_app/app";
import { LayoutProps, LayoutWithThemeProps } from "../types";
import Header from "./header/header";
import Footer from "./footer/footer";
import MetaHead from "./meta";

const Layout = ({ children, navigation, linkedinUrl }: LayoutProps) => (
	<div>
		<MetaHead />
		<Header navigation={navigation} linkedinUrl={linkedinUrl}/>
			{children}
		<Footer />
	</div>
);

const LayoutWithTheme: React.FC<LayoutWithThemeProps> = ({ ...props }) => (
	<MyApp Component={Layout} pageProps={{ ...props }} />
);

export default LayoutWithTheme;
