import NavBar from "@/components/Navigation/NavBar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Medical Plaform",
	description: "Plaform to manage medical appointments",
};

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				{/* Nav */}
				<NavBar />
				{children}
				{/* Footer */}
			</body>
		</html>
	);
}
