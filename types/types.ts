import { ReactNode } from "react";

type Navigation = {
	title: string;
	href: string;
}
export interface IndexPageProps {
	data: Record<string, unknown> | null;
	navigation: Navigation;
}

export interface LayoutWithThemeProps {
	children?: React.ReactNode;
	title?: string;
	navigation?: Navigation;
	// You can add any additional props if needed
}

export interface AppBarProps {
	navigation: Navigation;
}
// TODO : fix type for each component
export interface ApiData<T> {
	[key: string]: T;
	// Add more properties as needed
}

export interface MyAppProps {
	Component: React.ComponentType;
	pageProps: {
		title?: string;
		children?: React.ReactNode;
	};
}

export type LayoutProps = {
	children?: ReactNode;
	title?: string;
	navigation?: Navigation;
};
export type Users = Promise<ApiData<number | string>>