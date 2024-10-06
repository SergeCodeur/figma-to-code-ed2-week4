import { ISteperForm } from "@/app/(patient-auth)/utils/interface";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

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
			firstname: "",
			lastname: "",
			phone: "",
			email: "",
			address: "",
		},
		step2: {
			date: "",
			time: "",
			type: "",
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
	const [user, setUser] = useState<ISteperForm["step1"] | undefined>(undefined);

	const [formData, setFormData] = useState<ISteperForm>({
		step1: {
			firstname: "",
			lastname: "",
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
	useEffect(() => {
		if (typeof window !== "undefined") {
			const getStorage = localStorage.getItem("user");
			if (getStorage) {
				const parsedUser = JSON.parse(getStorage);
				setUser(parsedUser);
			}
		}
	}, []);
	useEffect(() => {
		if (user) {
			setFormData(prevData => ({
				...prevData,
				step1: {
					...prevData.step1,
					firstname: user.firstname || prevData.step1.firstname,
					lastname: user.lastname || prevData.step1.lastname,
					email: user.email || prevData.step1.email,
				},
			}));
		}
	}, [user]);
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
