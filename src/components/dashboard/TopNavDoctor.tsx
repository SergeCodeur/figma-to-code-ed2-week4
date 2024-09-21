import { Bell, Hamburger } from "@/assets/icons";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";

const TopNavDoctor = () => {
	const { toggleSidebar } = useSidebar();
	return (
		<div className="w-full flex items-center justify-between px-6 py-3 border-b border-blue/15 sticky top-0 z-[9] bg-background">
			<span>
				Welcome <span>John Doe</span>
			</span>
			<div className="flex items-center gap-7">
				<Bell />
				<Image
					className="rounded-full"
					src="/images/user.png"
					alt="user image"
					width={50}
					height={51}
				/>
				<button
					className="w-9 h-9 lg:hidden bg-blue/20 rounded-ls flex justify-center items-center"
					onClick={toggleSidebar}
				>
					<Hamburger />
				</button>
			</div>
		</div>
	);
};

export default TopNavDoctor;
