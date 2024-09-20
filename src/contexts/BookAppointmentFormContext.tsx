import { createContext, ReactNode, useContext, useState } from "react";

interface BookAppointmentContextProps {
	isOpen: boolean;
	toggleBookAppointment: () => void;
}

const BookAppointmentContext = createContext<BookAppointmentContextProps>({
	isOpen: false,
	toggleBookAppointment: () => {},
});

export const useBookAppointment = () => useContext(BookAppointmentContext);

// Composant BookAppointmentProvider pour fournir le contexte
export const BookAppointmentProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleBookAppointment = () => {
		setIsOpen(prevState => !prevState);
	};

	return (
		<BookAppointmentContext.Provider value={{ isOpen, toggleBookAppointment }}>
			{children}
		</BookAppointmentContext.Provider>
	);
};
