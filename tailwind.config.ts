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
