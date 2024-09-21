"use client";

import { Calendar } from "@/assets/icons";
import AppointmentCard from "./AppointmentCard";
import Button from "./ui/Button";
const Appointments = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
					Appointment
				</h1>
				<Button>
					<Calendar />
					<span className="sm:block hidden">Jun 16 - Jun 12</span>
				</Button>
			</div>
			<div>
				<h2 className="text-center my-2">Jun 16, 2024</h2>
				<div className="grid md:grid-cols-2 lg:gap-8 gap-4 grid-cols-1">
					<AppointmentCard
						image="user"
						name="John Wilson"
						date="08 AM - 10 AM"
						raison="Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues."
					/>
					<AppointmentCard
						image="user"
						name="John Wilson"
						date="08 AM - 10 AM"
						raison="Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues."
					/>
				</div>
			</div>
			<div className="mt-4">
				<h2 className="text-center my-2">Jun 12, 2024</h2>
				<div className="grid  md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
					<AppointmentCard
						image="user"
						name="John Wilson"
						date="08 AM - 10 AM"
						raison="Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues."
					/>
					<AppointmentCard
						image="user"
						name="John Wilson"
						date="08 AM - 10 AM"
						raison="Need longer appointment to review test results for patients with diabetes; an extended visit would cover more issues."
					/>
				</div>
			</div>
		</div>
	);
};

export default Appointments;
