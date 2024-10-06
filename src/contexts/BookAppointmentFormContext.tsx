import { ISteperForm } from "@/app/(patient-auth)/utils/interface";
import { createContext, ReactNode, useContext, useState } from "react";

interface BookAppointmentContextProps {
	isOpen: boolean;
	toggleBookAppointment: () => void;
	formData: ISteperForm;
	updateFormData: (
		newData: Partial<BookAppointmentContextProps["formData"]>,
	) => void;
}

const BookAppointmentContext = createContext<BookAppointmentContextProps>({
	isOpen: false,
	toggleBookAppointment: () => {},
	formData: {
		step1: {
			firstname: "Paul",
			lastname: "Taylor",
			phone: "+229 49 49 49 49",
			email: "",
			address: "Preston Inglewood, Maine 98380",
		},
		step2: {
			date: "",
			time: "",
			type: "General Consultation",
			reason: "",
			file: null,
		},
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
	const [formData, setFormData] = useState<ISteperForm>({
		step1: {
			firstname: "Paul",
			lastname: "Taylor",
			phone: "+229 49 49 49 49",
			email: "",
			address: "Preston Inglewood, Maine 98380",
		},
		step2: {
			date: "",
			time: "",
			type: "General Consultation",
			reason: "",
			file: null,
		},
	});

	const toggleBookAppointment = () => {
		setIsOpen(prevState => !prevState);
	};

	const updateFormData = (newData: Partial<ISteperForm>) => {
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
