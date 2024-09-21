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
				bleu: "#307bc4",
				"dark-blue": "#274760",
				white: "#ffffff",
			},
			borderRadius: {
				ls: "10px",
			},
		},
	},
	plugins: [],
};
export default config;
