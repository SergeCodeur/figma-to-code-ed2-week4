"use client";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import { useState } from "react";
import BookStepOne from "./BookStepOne";
import BookStepTwo from "./BookStepTwo";

const BookAppointmentContainer = () => {
	const { isOpen } = useBookAppointment();
	const [step, setStep] = useState(1);
	const totalSteps = 2;

	const handleNext = () => {
		setStep(Math.min(step + 1, totalSteps));
	};

	const handlePrev = () => {
		setStep(Math.max(step - 1, 1));
	};

	const handleExit = () => {
		console.log("Exiting form");
	};

	return (
		<div
			className={`${
				isOpen
					? "opacity-100 pointer-events-auto visible"
					: "opacity-0 pointer-events-none invisible"
			} absolute z-20 bg-background max-w-2xl w-full min-h-[500px] rounded-2xl border border-dark-blue/20 transition-opacity duration-300 ease-out top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5`}
		>
			<div className="flex justify-between mx-auto mb-6 max-w-44 relative">
				<span
					className={`w-10 h-10 text-center font-bold flex justify-center items-center rounded-full bg-dark-blue text-white
					}`}
				>
					1
				</span>
				<span
					className={`w-full h-[1px] absolute top-2/4 -translate-y-2/4 z-[-1] ${
						step === 1 ? "bg-gray" : "bg-dark-blue"
					}`}
				></span>
				<span
					className={`w-10 h-10 text-center font-bold flex justify-center items-center rounded-full ${
						step === 2 ? "bg-dark-blue text-white" : "bg-gray"
					}`}
				>
					2
				</span>
			</div>
			{step === 1 && (
				<BookStepOne handleNext={handleNext} handleExit={handleExit} />
			)}
			{step === 2 && <BookStepTwo handlePrev={handlePrev} />}
		</div>
	);
};

export default BookAppointmentContainer;
