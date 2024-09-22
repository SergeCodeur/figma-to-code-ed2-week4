"use client";
import { Navlinks } from "@/constants/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
	//
	const pathname = usePathname();

	//
	return (
		<div className="flex lg:flex-row w-full flex-col items-center justify-center gap-6 py-6 lg:p-0">
			{Navlinks.map(link => (
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
