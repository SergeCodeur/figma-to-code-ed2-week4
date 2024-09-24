"use client";
import { Navlinks } from "@/constants/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ className }: { className?: string }) => {
	const pathname = usePathname();

	return (
		<ul className={`${className}`}>
			{Navlinks.map(link => (
				<li key={link.href}>
					<Link
						href={link.href}
						className={`text-primary font-medium text-base ${
							pathname === link.href ? "border-b border-primary" : ""
						}`}
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
