"use client";
import { AppointmentCardProps } from "@/types/AppointmentCardProps";
import { formatAppointmentDate } from "@/utils/formatDate";
import Image from "next/image";
import { useState } from "react";
import Button from "../../ui/Button";
import AppointmentDetails from "../AppointmentDetails";

const AppointmentCard = ({
	image,
	name,
	date,
	raison,
	address,
	interest,
	problem,
	time,
	id,
	onDecline,
}: AppointmentCardProps) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	const handleDecline = () => {
		const appointments: AppointmentCardProps[] = JSON.parse(
			localStorage.getItem("stepData") || "[]",
		);

		const updatedAppointments = appointments.filter(
			appointment => appointment.id !== id,
		);

		localStorage.setItem("stepData", JSON.stringify(updatedAppointments));
		if (onDecline) onDecline();
	};

	return (
		<div className="border border-gray flex gap-2 flex-col rounded-xl p-6 relative">
			<div className="flex items-center justify-between flex-wrap gap-2">
				<div className="flex items-center gap-4">
					<Image
						src={`/images/${image}.png`}
						alt={name}
						width={50}
						height={50}
					/>
					<div className="flex flex-col">
						<span className="font-bold">{name}</span>
						<span className="font-light">{date}</span>
					</div>
				</div>
				<button
					className="rounded-2xl flex justify-center items-center py-1.5 px-3 bg-gray font-semibold text-xs"
					onClick={toggleDetails}
				>
					View details
				</button>
			</div>

			<div className="lg:pr-6">
				<h3 className="font-semibold">Raison: </h3>
				<p className="text-sm sm:text-base">{raison}</p>
			</div>
			<div className="flex items-center flex-wrap justify-between gap-4">
				<Button
					variant="outline"
					className="max-sm:w-full"
					onClick={handleDecline}
				>
					Decline appointment
				</Button>
				<Button variant="linear_color" className="max-sm:w-full">
					Accept appointment
				</Button>
			</div>

			{/* Display AppointmentDetails component */}
			{showDetails && (
				<AppointmentDetails
					image="user"
					name={name}
					adress={address}
					interest={interest}
					problem={problem}
					onClose={toggleDetails}
					date={formatAppointmentDate(date, time)}
				/>
			)}
		</div>
	);
};

export default AppointmentCard;
