"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLinks = () => {
	//
	const pathname = usePathname();
	const links = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];
	//
	return (
		<div className="flex lg:flex-row w-full flex-col items-center justify-center gap-3 py-6 lg:p-0">
			{links.map(link => (
				<Link
					key={link.href}
					href={link.href}
					className={`text-primary font-medium text-base ${
						pathname === link.href ? "border-b border-primary" : ""
					}`}
				>
					{link.label}
				</Link>
			))}
		</div>
	);
};

export default NavLinks;
