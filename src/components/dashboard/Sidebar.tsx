"use client";
import { Logout, Setting } from "@/assets/icons";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";
import Link from "next/link";
import SidebarLink from "../ui/SidebarLink";

const Sidebar = () => {
	const { isOpen } = useSidebar();
	return (
		<aside
			className={`${
				isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-60"
			} max-lg:fixed relative w-60 max-lg:-translate-x-60 bg-white z-10 h-full flex flex-col items-center justify-between p-5 border-r border-dark-blue/15 transition-transform duration-200 ease-in-out`}
		>
			<div className="lg:space-y-8 space-y-3 w-full">
				<div>
					<Image
						src="/images/logo-light.svg"
						alt="logo"
						width={70}
						height={72}
						priority={true}
					/>
				</div>
				<nav>
					<SidebarLink />
				</nav>
			</div>
			<ul className="flex flex-col space-y-1 w-full gap-2.5 overflow-x-hidden">
				<li>
					<Link
						href="#"
						className="text-base py-2.5 px-3 rounded-ls flex items-center gap-2.5 w-full border border-dark-blue/20"
					>
						<Setting />
						<span>Settings</span>
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="text-base py-2.5 px-3 rounded-ls flex items-center gap-2.5 w-full border border-dark-blue/20"
					>
						<Logout />
						<span>Logout</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
