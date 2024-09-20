"use client";
import { sidebarLinks } from "@/constants/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = () => {
	const pathname = usePathname();

	const isLinkActive = (label: string) => {
		return pathname.includes(label);
	};

	return (
		<ul className="flex flex-col space-y-1">
			{sidebarLinks.map((link, index) => (
				<Link
					className={`${
						isLinkActive(link.label) ? "bg-blue/20 font-semibold" : ""
					} text-base py-2.5 px-3 rounded-ls flex items-center gap-2.5 w-full`}
					key={index}
					href={link.href}
				>
					<link.icon className="w-[18px] h-[18px]" />
					<span>{link.label}</span>
				</Link>
			))}
		</ul>
	);
};

export default SidebarLink;
