"use client";
import Button from "@/components/ui/Button";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import Input from "./Input";
import Label from "./Label";
import { step1Data } from "@/utils/step-data";
import { useState } from "react";
const BookStepOne = ({ handleNext }: { handleNext: () => void }) => {
	const { formData, updateFormData } = useBookAppointment();
	const [errors, setErrors] = useState<Partial<typeof formData.step1>>({});
	const validateField = (
		name: keyof typeof formData.step1,
		value: string,
	): string | undefined => {
		return validationRules[name](value);
	};
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;

		updateFormData({ [name]: value });
		// const error = validateField(name as keyof typeof formData.step1, value);
		// setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
	};

	const validationRules: {
		[key in keyof typeof formData.step1]: (value: string) => string | undefined;
	} = {
		firstname: value =>
			value.length < 2 ? "First name must be at least 2 characters" : undefined,
		lastname: value =>
			value.length < 2 ? "Last name must be at least 2 characters" : undefined,
		email: value =>
			!/\S+@\S+\.\S+/.test(value) ? "Email is not valid" : undefined,
		phone: value =>
			!/^\+229\s(\d{2}\s){3}\d{2}$/.test(value)
				? "Phone number is not valid"
				: undefined,
		address: value => (value.length < 2 ? "Adress is required" : undefined),
	};

	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Personal Information</h2>
			<form className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{step1Data.map(({ name, label }, index) => (
						<div
							key={name}
							className={index === step1Data.length - 1 ? "md:col-span-2" : ""}
						>
							<Label htmlFor={name} label={label} />
							<Input
								type={
									name === "email" ? "email" : name === "phone" ? "tel" : "text"
								}
								name={name}
								value={
									formData.step1[name as keyof typeof formData.step1] as string
								}
								id={name}
								onChange={handleChange}
							/>
							{errors[name as keyof typeof formData.step1] && (
								<span className="text-sm text-red-500">
									{errors[name as keyof typeof formData.step1]}
								</span>
							)}
						</div>
					))}
				</div>

				<div className="flex md:justify-end mt-4">
					<Button
						type="button"
						variant="linear_color"
						className="w-full md:w-52"
						onClick={handleNext}
					>
						Next
					</Button>
				</div>
			</form>
		</div>
	);
};

export default BookStepOne;
