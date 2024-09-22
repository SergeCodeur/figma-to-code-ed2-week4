import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.25rem",
				sm: "2rem",
				md: "1.25rem",
				lg: "4rem",
				"2xl": "3rem",
			},
			screens: {
				"2xl": "1350px",
				xl: "1200px",
				lg: "992px",
				md: "768px",
				sm: "576px",
			},
		},
		extend: {
			backgroundImage: {
				"hero-bg": "url('/images/hero_bg.webp')",
				"hero-img": "url('/images/hero_image.webp')",
				"dep-bg": "url('/images/departements-bg.png')",
				"cta-bg": "url('/images/cta_bg.png')",
			},
			colors: {
				background: "#ffffff",
				foreground: "#274760",
				gray: "#e6e6e6",
				blue: "#307bc4",
				sky: {
					500: "#307BC4",
				},
				"dark-blue": "#274760",
				white: "#ffffff",
				"linear-light-blue": "var(--linear-light-blue)",
				"linear-dark-blue": "var(--linear-dark-blue)",
			},
			borderRadius: {
				ls: "10px",
			},
			boxShadow: {
				"light-blue": "0px 4px 20px rgba(39, 71, 96, 0.17)",
				card: "0px 4px 21px 1px rgba(48, 123, 196, 0.1)",
			},
		},
	},
	plugins: [],
};
export default config;
