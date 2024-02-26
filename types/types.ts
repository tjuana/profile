export interface IndexPageProps {
	data: Record<string, unknown> | null;
}

export interface LayoutWithThemeProps {
	children?: React.ReactNode;
	title?: string;
	// You can add any additional props if needed
}

// TODO : fix type for each component
export interface ApiData<T> {
	[key: string]: T;
	// Add more properties as needed
}

export interface MyAppProps {
	Component: React.ComponentType<any>;
	pageProps: {
		[key: string]: any;
		children?: React.ReactNode;
	};
}

export type Users = Promise<ApiData<number | string>>