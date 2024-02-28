import { ReactNode } from "react";

export type LayoutProps = {
	children?: ReactNode;
	title?: string;
	navigation?: Navigation;
	linkedinUrl?: string;
};

export type NavigationItem = {
	key: string;
	title: string;
	href: string;
};

export type Navigation = Array<NavigationItem>

export interface HeaderMenuProps {
	pages?: Navigation;
}

export interface IndexPageProps {
	data: Record<string, unknown> | null;
	navigation: Navigation;
}

export interface LayoutWithThemeProps extends LayoutProps {

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
	pageProps: LayoutProps;
}

type ExternalLink = {
	title: string;
	href: string;
};

export type ExternalLinks = Record<string, ExternalLink>;

export type Users = Promise<ApiData<number | string>>