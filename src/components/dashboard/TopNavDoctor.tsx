import { Bell, Cancel, Hamburger } from "@/assets/icons";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";

const TopNavDoctor = () => {
	const { isOpen, toggleSidebar } = useSidebar();
	return (
		<div className="w-full flex items-center justify-between px-6 py-3 border-b border-blue/15 sticky top-0 z-[9] bg-background">
			<span className="text-sm">
				Welcome <span className="font-semibold">Doctor John</span>
			</span>
			<div className="flex items-center gap-3 md:gap-7">
				<Bell />
				<Image
					className="rounded-full object-cover object-top"
					src="/images/doctor-user-image.png"
					alt="doctor image"
					width={50}
					height={51}
					loading="lazy"
				/>
				<button
					className="w-11 h-10 lg:hidden bg-blue/20 rounded-ls flex justify-center items-center"
					onClick={toggleSidebar}
				>
					{isOpen ? <Cancel /> : <Hamburger />}
				</button>
			</div>
		</div>
	);
};

export default TopNavDoctor;
