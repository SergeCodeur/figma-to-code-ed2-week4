"use client";

import { Cancel, ChevronRight, Hamburger } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-background container py-2 w-full flex items-center justify-between sticky top-0 z-10">
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

			<div className="hidden lg:flex items-center justify-end min-w-44">
				<Link
					href="/role-selection"
					className="bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3 flex justify-center items-center gap-2.5"
				>
					<span>Book now </span>
					<ChevronRight />
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
