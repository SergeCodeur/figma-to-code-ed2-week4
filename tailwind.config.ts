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
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					50: "#27476080",
					100: "#414870",
					400: "#307BC4",
					200: "#D2EAEF",
					300: "#86BBF1",
					900: "#274760",
				},
			},
		},
	},
	plugins: [],
};
export default config;
