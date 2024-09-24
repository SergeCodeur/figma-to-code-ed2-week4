import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextProps {
	isOpen: boolean;
	toggleSidebar: () => void;
	// closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>({
	isOpen: false,
	toggleSidebar: () => {},
	// closeSidebar: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(prevState => !prevState);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			<div className="w-full h-full flex relative">{children}</div>
		</SidebarContext.Provider>
	);
};
