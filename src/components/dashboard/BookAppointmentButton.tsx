import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import Button from "../ui/Button";

const BookAppointmentButton = () => {
	const { toggleBookAppointment } = useBookAppointment();

	return (
		<Button
			variant="linear_color"
			className="px-7"
			onClick={toggleBookAppointment}
		>
			Book appointment
		</Button>
	);
};

export default BookAppointmentButton;
