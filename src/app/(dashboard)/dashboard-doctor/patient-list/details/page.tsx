import { ArrowRight } from "@/assets/icons";
import AppointmentNoteCard from "@/components/dashboard/cards/AppointmentNoteCard";
import PatientDetailsCard from "@/components/dashboard/cards/PatientDetailsCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Patient Details",
};

const PatientDetails = () => {
	return (
		<div className="w-full space-y-7">
			<div className="flex justify-start gap-2.5">
				<Link
					href="/dashboard-doctor/patient-list"
					className="font-semibold text-xs md:text-sm"
				>
					Patient List
				</Link>
				<ArrowRight width={16} height={16} />
				<p className="text-xs md:text-sm">Patient details</p>
			</div>
			<div className="flex max-md:flex-col gap-5 min-h-52 justify-center">
				<div className="md:max-w-96 w-full">
					<PatientDetailsCard name={"Paul Smith"} />
				</div>
				<div className="flex-1 p-5 border border-dark-blue/20 rounded-2xl h-full max-w-[780px]">
					<h3 className="font-semibold text-lg md:text-xl mb-2">
						Past Notes Appointment
					</h3>
					<div className="overflow-y-auto max-h-[700px]">
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
						<AppointmentNoteCard
							date="June 12, 2024"
							details={{
								title: "Diabetes Control Appointment",
								description:
									"Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead.",
								treatment: "Check-up",
								time: "08 AM -10 AM",
								duration: "3 months",
								document: "check-up-result.pdf",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDetails;
