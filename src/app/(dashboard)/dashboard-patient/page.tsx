"use client";
import { Filter } from "@/assets/icons";
import BookAppointmentContainer from "@/components/dashboard/book-appointment-multi-step-form/BookAppointmentContainer";
import BookAppointmentButton from "@/components/dashboard/BookAppointmentButton";
import AppointmentNoteDetails from "@/components/dashboard/cards/AppointmentNoteDetails";
import PatientDetailsCardFooter from "@/components/dashboard/cards/PatientDetailsCardFooter";
import PatientDetailsCardHeader from "@/components/dashboard/cards/PatientDetailsCardHeader";
import TopNavPatient from "@/components/dashboard/TopNavPatient";
import Button from "@/components/ui/Button";
import { BookAppointmentProvider } from "@/contexts/BookAppointmentFormContext";

const PatienDashboard = () => {
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
								name="Paul Taylor"
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
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
								<AppointmentNoteDetails
									date="June 12, 2024"
									title="Diabetes Control Appointment"
									description="Blood sugar management is especially important for people with diabetes as chronicaly high blood sugar levels can lead."
									treatment="Check-up"
									time="08 AM -10 AM"
								/>
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
