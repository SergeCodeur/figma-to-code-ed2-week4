"use client";

import { Cancel, ChevronRight, Hamburger } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-background container py-2 w-full flex items-center justify-between">
			<Link href={"/"}>
				<Image
					src={"/images/logo_light.svg"}
					alt="Logo"
					height={50}
					width={50}
				/>
			</Link>

			<div className="lg:hidden block">
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="text-primary focus:outline-none"
				>
					{menuOpen ? <Cancel /> : <Hamburger />}
				</button>
			</div>

			<NavLinks className="hidden lg:flex w-full items-center justify-center gap-6 py-6" />

			{/* Mobile nav */}
			<NavLinks
				className={`${
					menuOpen
						? " pointer-events-auto opacity-100"
						: "opacity-0 pointer-events-none"
				} flex lg:hidden transition-opacity duration-300 ease-in-out flex-col absolute inset-x-0 top-16 bg-white z-20 w-full items-center justify-center gap-6 py-6`}
			/>

			<div className="hidden lg:flex w-52  items-center justify-end">
				<Link
					href="/sign-up"
					className="bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3 flex justify-center items-center gap-2.5"
				>
					Book now <ChevronRight />
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
