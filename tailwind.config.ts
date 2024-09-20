import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"lg": "968px",
				"hero-text-w":"670px",
				"aboutUS-imgDiv-w":"700px",
				"aboutUs-w":"550px",
				"about-img-w":"520px"
			},
			height: {
				"lg": "700px",
				"hero-text-h":"438px",
				"aboutUS-imgDiv-h":"650px",
				"about-img-h":"483px"
			},
			backgroundImage: {
				"hero-bg": "url('/images/hero_bg.webp')",
				"hero-img": "url('/images/hero_image.webp')",
				"dep-bg": "url('/images/departements-bg.png')",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
			},
		},
	},
	plugins: [],
};
export default config;
