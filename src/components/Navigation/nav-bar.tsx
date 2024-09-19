"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DefaultButton from "../default-button";
import NavLinks from "./nav-likns";
import { Menu, X } from "lucide-react";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-background px-2 md:px-20 py-2 w-full flex items-center justify-between">
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
					{menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
				<DefaultButton text="Book Now" />
			</div>
		</nav>
	);
};

export default NavBar;
