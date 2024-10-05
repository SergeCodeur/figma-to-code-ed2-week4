"use client";
import { Bell } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TopNavPatient = () => {
	const [isOpen, setIsOpen] = useState(false);
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	const router = useRouter();

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const logout = () => {
		localStorage.removeItem("user");
		document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		router.push("/sign-in");
	};
	return (
		<div className="sticky top-0 z-[9] w-full">
			<div className="w-full flex items-center justify-between px-6 py-3 border-b border-blue/15 bg-background">
				<div className="flex items-center gap-2.5">
					<Link href="" className="w-[50px] h-[50px]">
						<Image
							src="/images/logo-light.svg"
							alt="logo"
							width={50}
							height={50}
							priority={true}
							style={{
								width: "auto",
								height: "auto",
							}}
						/>
					</Link>
					<span className="text-xs md:text-sm">
						Welcome{" "}
						<span className="font-semibold">
							{user.lastName} {user.firstName}
						</span>
					</span>
				</div>
				<div className="flex items-center gap-2 md:gap-7">
					<Bell className="cursor-pointer" />
					<Image
						className="rounded-full cursor-pointer"
						onClick={handleClick}
						src="/images/user.png"
						alt="user image"
						width={50}
						height={51}
						role="button"
						aria-haspopup="true"
						aria-expanded={isOpen}
						aria-controls="user-menu"
					/>
				</div>
			</div>
			<div
				id="user-menu"
				className={`${
					isOpen
						? "opacity-100 pointer-events-auto visible"
						: "opacity-0 pointer-events-none invisible"
				} absolute -bottom-2 translate-y-full right-5 z-20 bg-background min-w-52 rounded-2xl border border-dark-blue/20 transition-opacity duration-300 ease-out`}
				role="menu"
				aria-labelledby="user-menu-button"
			>
				<div className="p-2.5">
					<h3 className="font-medium text-[15px]">
						{user.lastName} {user.firstName}
					</h3>
					<p className="font-light text-sm">{user.email}</p>
				</div>
				<div className="p-2.5 border-y border-dark-blue/20 space-y-1">
					<Link
						href="#"
						className="text-sm font-medium px-2.5 py-1.5 rounded-ls hover:bg-gray/40 w-full text-left inline-block"
					>
						Profile
					</Link>
					<Link
						href="#"
						className="text-sm font-medium px-2.5 py-1.5 rounded-ls hover:bg-gray/40 w-full text-left inline-block"
					>
						Settings
					</Link>
				</div>
				<div className="p-2.5">
					<button
						className="text-sm font-medium px-2.5 py-1.5 rounded-ls hover:bg-gray/40 w-full text-left"
						onClick={logout}
					>
						Log out
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopNavPatient;
