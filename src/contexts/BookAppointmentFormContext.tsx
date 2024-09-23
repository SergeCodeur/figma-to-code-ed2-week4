import { createContext, ReactNode, useContext, useState } from "react";

interface BookAppointmentContextProps {
	isOpen: boolean;
	toggleBookAppointment: () => void;
	formData: {
		firstname: string;
		lastname: string;
		phone: string;
		email: string;
		address: string;
		date: string;
		time: string;
		type: string;
		reason: string;
		file: File | null;
	};
	updateFormData: (
		newData: Partial<BookAppointmentContextProps["formData"]>,
	) => void;
}

const BookAppointmentContext = createContext<BookAppointmentContextProps>({
	isOpen: false,
	toggleBookAppointment: () => {},
	formData: {
		firstname: "Paul",
		lastname: "Taylor",
		phone: "+229 49 49 49 49",
		email: "",
		address: "Preston Inglewood, Maine 98380",
		date: "",
		time: "",
		type: "General Consultation",
		reason: "",
		file: null,
	},
	updateFormData: () => {},
});

export const useBookAppointment = () => useContext(BookAppointmentContext);

export const BookAppointmentProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState<
		BookAppointmentContextProps["formData"]
	>({
		firstname: "Paul",
		lastname: "Taylor",
		phone: "+229 49 49 49 49",
		email: "",
		address: "Preston Inglewood, Maine 98380",
		date: "",
		time: "",
		type: "General Consultation",
		reason: "",
		file: null,
	});

	const toggleBookAppointment = () => {
		setIsOpen(prevState => !prevState);
	};

	const updateFormData = (
		newData: Partial<BookAppointmentContextProps["formData"]>,
	) => {
		setFormData(prevData => ({
			...prevData,
			...newData,
		}));
	};

	return (
		<BookAppointmentContext.Provider
			value={{ isOpen, toggleBookAppointment, formData, updateFormData }}
		>
			{children}
		</BookAppointmentContext.Provider>
	);
};
