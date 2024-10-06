"use client";

import { Calendar } from "@/assets/icons";
import {
	getAppointmentsFromLocalStorage,
	groupAppointmentsByDate,
	sortAppointmentsByDate,
} from "@/utils/appointments";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import AppointmentCard from "./cards/AppointmentCard";

const Appointments = () => {
	const [appointmentsByDate, setAppointmentsByDate] = useState<{
		[key: string]: any[];
	}>({});
	const [hasAppointments, setHasAppointments] = useState(false);
	const [dateRange, setDateRange] = useState<string>("");

	const loadAppointments = () => {
		const appointments = getAppointmentsFromLocalStorage();

		if (appointments.length === 0) {
			setHasAppointments(false);
		} else {
			setHasAppointments(true);
			const sortedAppointments = sortAppointmentsByDate(appointments);
			const groupedByDate = groupAppointmentsByDate(sortedAppointments);
			setAppointmentsByDate(groupedByDate);

			if (appointments.length > 0) {
				const firstDate = new Date(sortedAppointments[0].date);
				const lastDate = new Date(
					sortedAppointments[sortedAppointments.length - 1].date,
				);
				setDateRange(
					`${firstDate.toLocaleString("default", { month: "short" })} ${firstDate.getDate()} - ${lastDate.toLocaleString("default", { month: "short" })} ${lastDate.getDate()}`,
				);
			}
		}
	};

	useEffect(() => {
		loadAppointments();
	}, []);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h1 className="md:text-3xl sm:text-2xl text-xl font-semibold">
					Appointment
				</h1>
				{hasAppointments && (
					<Button>
						<Calendar />
						<span className="sm:block hidden">{dateRange}</span>
					</Button>
				)}
			</div>

			{!hasAppointments ? (
				<p className="text-center mt-4">No appointments.</p>
			) : (
				Object.keys(appointmentsByDate).map(date => (
					<div key={date} className="mt-4">
						<h2 className="text-center my-2">{date}</h2>
						<div className="grid md:grid-cols-2 lg:gap-8 gap-4 grid-cols-1">
							{appointmentsByDate[date].map((appointment, index) => (
								<AppointmentCard
									key={index}
									id={appointment.id}
									image="user"
									name={`${appointment.firstname} ${appointment.lastname}`}
									date={`${appointment.date}`}
									raison={appointment.reason}
									address={appointment.address}
									interest={appointment.type}
									problem={appointment.reason}
									time={`${appointment.time}`}
									onDecline={loadAppointments}
								/>
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Appointments;
