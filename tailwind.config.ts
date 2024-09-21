import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				width: {
					lg: "968px",
					"hero-text-w": "670px",
					"aboutUS-imgDiv-w": "700px",
					"aboutUs-w": "550px",
					"about-img-w": "520px",
				},
				height: {
					lg: "700px",
					"hero-text-h": "438px",
					"aboutUS-imgDiv-h": "650px",
					"about-img-h": "483px",
				},
				backgroundImage: {
					"hero-bg": "url('/images/hero_bg.webp')",
					"hero-img": "url('/images/hero_image.webp')",
					"dep-bg": "url('/images/departements-bg.png')",
				},
				background: "#ffffff",
				foreground: "#274760",
				gray: "#e6e6e6",
				blue: "#307bc4",
				"dark-blue": "#274760",
				white: "#ffffff",
				"linear-light-blue": "var(--linear-light-blue)",
				"linear-dark-blue": "var(--linear-dark-blue)",
			},
			borderRadius: {
				ls: "10px",
			},
		},
	},
	plugins: [],
};
export default config;
