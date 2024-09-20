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

// Composant SidebarProvider pour fournir le contexte
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(prevState => !prevState);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
