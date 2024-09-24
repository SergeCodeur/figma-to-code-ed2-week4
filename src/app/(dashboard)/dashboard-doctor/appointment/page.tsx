import Appointments from "@/components/dashboard/Appointments";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Appointments",
};

const AppointmentPage = () => {
	return <Appointments />;
};

export default AppointmentPage;
