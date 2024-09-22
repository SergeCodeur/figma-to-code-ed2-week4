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

			<div
				className={`${
					menuOpen ? "block" : "lg:block md:hidden hidden"
				} z-20 absolute top-16 left-0 w-full lg:bg-background lg:static bg-zinc-200 p-5 md:flex md:items-center md:justify-center md:gap-5`}
			>
				<NavLinks />
			</div>

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
