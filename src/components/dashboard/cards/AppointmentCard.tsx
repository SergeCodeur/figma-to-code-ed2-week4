"use client";
import { AppointmentCardProps } from "@/types/AppointmentCardProps";
import Image from "next/image";
import { useState } from "react";
import Button from "../../ui/Button";
import AppointmentDetails from "../AppointmentDetails";

const AppointmentCard = ({
	image,
	name,
	date,
	raison,
}: AppointmentCardProps) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
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
				<Button variant="outline" className="max-sm:w-full">
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
					adress="Preston Inglewood, Maine 98380"
					date="Monday Jun 14, 2024 on 08 AM - 10 AM"
					interest="Diabetes Control Appointment"
					problem="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
					onClose={toggleDetails} // Pass the close function as a prop
				/>
			)}
		</div>
	);
};

export default AppointmentCard;
