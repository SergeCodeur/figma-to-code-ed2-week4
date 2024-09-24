"use client";
import { Cancel } from "@/assets/icons";
import Button from "@/components/ui/Button";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import { useState } from "react";
import BookStepOne from "./BookStepOne";
import BookStepTwo from "./BookStepTwo";

const BookAppointmentContainer = () => {
	const { isOpen, toggleBookAppointment } = useBookAppointment();
	const [step, setStep] = useState(1);
	const totalSteps = 2;

	const handleNext = () => {
		setStep(Math.min(step + 1, totalSteps));
	};

	const handlePrev = () => {
		setStep(Math.max(step - 1, 1));
	};

	return (
		<div
			className={`${
				isOpen
					? "bg-dark-blue/20 inset-0 fixed overflow-auto z-40 !m-0 opacity-100 pointer-events-auto visible"
					: "opacity-0 pointer-events-none invisible"
			} transition-opacity duration-300 ease-out`}
		>
			<div
				className={`${
					isOpen
						? "opacity-100 pointer-events-auto visible"
						: "opacity-0 pointer-events-none invisible"
				} absolute z-20 bg-background max-w-2xl md:w-full w-[90%] min-h-[500px] rounded-2xl border border-dark-blue/20 transition-opacity duration-300 ease-out top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5`}
			>
				<div className="relative">
					<div className="flex justify-between mx-auto mb-6 max-w-28 md:max-w-44 relative">
						<span
							className={`md:w-10 md:h-10 h-7 w-7 text-xs md:text-sm text-center font-bold flex justify-center items-center rounded-full bg-dark-blue text-white
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
							className={`md:w-10 md:h-10 h-7 w-7 text-xs md:text-sm text-center font-bold flex justify-center items-center rounded-full ${
								step === 2 ? "bg-dark-blue text-white" : "bg-gray"
							}`}
						>
							2
						</span>
					</div>
					<Button
						variant="ghost"
						className="absolute right-0 top-0"
						onClick={toggleBookAppointment}
					>
						<Cancel />
					</Button>
				</div>
				{step === 1 && <BookStepOne handleNext={handleNext} />}
				{step === 2 && <BookStepTwo handlePrev={handlePrev} />}
			</div>
		</div>
	);
};

export default BookAppointmentContainer;
