import React from "react";
import Head from "next/head";
import AppBarButton from "./header/header";
import MyApp from "../pages/_app/app";
import { LayoutProps, LayoutWithThemeProps } from "../types/types";

const Layout = ({ children, title = "This is the default title", navigation }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Passionate web developer with expertise in React, Next.js, TypeScript, Node.js, MongoDB, and Material-UI. Explore my projects and experience in web development." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="web development, portfolio, React, Next.js, TypeScript, Node.js, MongoDB, Material-UI" />
    </Head>
    <AppBarButton navigation={navigation}/>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

const LayoutWithTheme: React.FC<LayoutWithThemeProps> = ({ title, ...props }) => (
  <MyApp Component={Layout} pageProps={{ ...props, title }} />
);

export default LayoutWithTheme;
