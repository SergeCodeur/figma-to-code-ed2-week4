"use client";
import { ISteperForm } from "@/app/(patient-auth)/utils/interface";
import { Filter } from "@/assets/icons";
import BookAppointmentContainer from "@/components/dashboard/book-appointment-multi-step-form/BookAppointmentContainer";
import BookAppointmentButton from "@/components/dashboard/BookAppointmentButton";
import AppointmentNoteDetailsCard from "@/components/dashboard/cards/AppointmentNoteDetails";
import PatientDetailsCardFooter from "@/components/dashboard/cards/PatientDetailsCardFooter";
import PatientDetailsCardHeader from "@/components/dashboard/cards/PatientDetailsCardHeader";
import TopNavPatient from "@/components/dashboard/TopNavPatient";
import Button from "@/components/ui/Button";
import { AppointmentNoteDetails } from "@/constants/AppointmentNoteDetails";
import {
	BookAppointmentProvider,
	useBookAppointment,
} from "@/contexts/BookAppointmentFormContext";
import { useEffect, useState } from "react";

const PatienDashboard = () => {
	const [user, setUser] = useState<ISteperForm["step1"] | undefined>(undefined);
	const { formData } = useBookAppointment();
	console.log(formData.step1.firstname);
	const sortedAppointments = AppointmentNoteDetails.sort((a, b) => {
		const dateA = a.date ? new Date(a.date) : new Date(0);
		const dateB = b.date ? new Date(b.date) : new Date(0);
		return dateB.getTime() - dateA.getTime();
	});
	//? is it possible to use another way ?
	useEffect(() => {
		if (typeof window !== "undefined") {
			const getStorage = localStorage.getItem("user");
			if (getStorage) {
				const parsedUser = JSON.parse(getStorage);
				setUser(parsedUser);
			}
		}
	}, []);
	return (
		<BookAppointmentProvider>
			<div className="w-full space-y-7 relative overflow-y-scroll h-dvh">
				<TopNavPatient />
				<div className="w-fit mx-auto space-y-7 mt-5 px-5 pb-8">
					<div className="flex justify-end items-center">
						<BookAppointmentButton />
					</div>
					<div className="flex max-md:flex-col gap-5 min-h-52 justify-center">
						<div className="md:max-w-96 w-full space-y-5">
							<PatientDetailsCardHeader
								avatar="/images/patient.png"
								name={`${
									!user?.firstname
										? "Loading..."
										: `${user?.firstname as string} ${user?.lastname as string}`
								}`}
								phoneNumber="+229 49 49 49 49"
								address="Preston Inglewood, Maine 98380"
								appointments={19}
								completed={18}
							/>
							<PatientDetailsCardFooter
								profileCompletion={{
									title: "Complete your profile",
									percentage: "89",
								}}
								weight="160lb"
								height="1.80 m"
								gender="Men"
								bloodType="O+ (Positive)"
								bloodGlucose="2000 mg/dL "
								bloodPressure="124/79 mmHd"
								diase="Diabetes"
								allergies="Peanut"
							/>
						</div>
						<div className="flex-1 p-5 border border-dark-blue/20 rounded-2xl h-full max-w-[650px] space-y-7">
							<div className="flex justify-between items-center mb-2">
								<h3 className="font-semibold text-base md:text-xl">
									Appointment History
								</h3>
								<Button className="font-medium text-base">
									<Filter className="max-md:w-3.5 max-md:h-3.5" />
									<span className="lg:block hidden">Filter</span>
								</Button>
							</div>
							<div className="overflow-y-auto max-h-[700px] space-y-5">
								{sortedAppointments.map((appointment, index) => (
									<AppointmentNoteDetailsCard key={index} {...appointment} />
								))}
							</div>
						</div>
					</div>
				</div>
				<BookAppointmentContainer />
			</div>
		</BookAppointmentProvider>
	);
};

export default PatienDashboard;
