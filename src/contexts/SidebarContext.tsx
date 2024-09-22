import useClickOutside from "@/hooks/UseClickOutside";
import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>({
	isOpen: false,
	toggleSidebar: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(prevState => !prevState);
	};

	const ref = useClickOutside(() => {
		if (isOpen) {
			setIsOpen(false);
		}
	}, isOpen);

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			<div className="w-full h-full flex">
				<aside ref={ref}>{children}</aside>
			</div>
		</SidebarContext.Provider>
	);
};
