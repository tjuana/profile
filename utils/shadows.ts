// shadows.ts
const shadows = [
	'none',
	'0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.05)',
	'your-custom-shadow-1',
	'your-custom-shadow-2',
// ... add more custom shadows as needed
] as const;

export type Shadows = typeof shadows;

export default shadows;
