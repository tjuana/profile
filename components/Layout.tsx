import React from "react";
import Head from "next/head";

import MyApp from "../pages/_app/app";
import { LayoutProps, LayoutWithThemeProps } from "../types/types";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, navigation }: LayoutProps) => (
  <div>
    <Head>
      <meta name="description" content="Passionate web developer with expertise in React, Next.js, TypeScript, Node.js, MongoDB, and Material-UI. Explore my projects and experience in web development." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Vladislav Rogoza" />
    </Head>
    <Header navigation={navigation}/>
    {children}
    <Footer />
  </div>
);

const LayoutWithTheme: React.FC<LayoutWithThemeProps> = ({ title, ...props }) => (
  <MyApp Component={Layout} pageProps={{ ...props, title }} />
);

export default LayoutWithTheme;
