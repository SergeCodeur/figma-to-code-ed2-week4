"use client";
import { Clock } from "@/assets/icons";
import Button from "@/components/ui/Button";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import { useState } from "react";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

const BookStepTwo = ({ handlePrev }: { handlePrev: () => void }) => {
	const { toggleBookAppointment, updateFormData, formData } =
		useBookAppointment();
	const [errors, setErrors] = useState<Partial<typeof formData.step2>>({});
	const validationRules: {
		[key in keyof Omit<typeof formData.step2, "file" | "type">]: (
			value: string,
		) => string | undefined;
	} = {
		date: value => (!value.length ? "Invalid date" : undefined),
		time: value => {
			const [hours, minutes] = value.split(":").map(Number);
			return isNaN(hours) || isNaN(minutes) ? "Invalid time format" : undefined;
		},

		reason: value => (!value.length ? "This field is required" : undefined),
	};
	const validateField = (
		name: keyof Omit<typeof formData.step2, "file" | "type">,
		value: string,
	): string | undefined => {
		return validationRules[name](value);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		if (name in formData.step2) {
			updateFormData({ step2: { ...formData.step2, [name]: value } });
		}
		const error = validateField(
			name as keyof Omit<typeof formData.step2, "file" | "type">,
			value,
		);
		setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
	};

	// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.files) {
	// 		updateFormData({ file: e.target.files[0] });
	// 	}
	// };

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toggleBookAppointment();

		const validationErrors: Partial<typeof formData.step2> = {};
		for (const key in formData.step2) {
			if (key === "date" || key === "time" || key === "reason") {
				const error = validateField(
					key as keyof Omit<typeof formData.step2, "file" | "type">,
					formData.step2[
						key as keyof Omit<typeof formData.step2, "file" | "type">
					],
				);

				if (error) {
					validationErrors[
						key as keyof Omit<typeof formData.step2, "file" | "type">
					] = error;
				}
			}
		}

		// Si des erreurs existent, on les enregistre dans l'état
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		} else {
			// Si aucune erreur, on stocke les données dans le localStorage
			const newData = { id: Date.now(), ...formData.step1, ...formData.step2 };
			const getStorage = localStorage.getItem("stepData");
			if (!getStorage) {
				localStorage.setItem("stepData", JSON.stringify([newData]));
			} else {
				const oldData = JSON.parse(getStorage);
				localStorage.setItem("stepData", JSON.stringify([...oldData, newData]));
			}
		}
	};

	return (
		<div>
			<h2 className="text-lg font-semibold mb-5">Appointment Details</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label htmlFor="date" label="Date" />
						<DatePicker
							name="date"
							id="date"
							value={formData.step2.date}
							onChange={handleChange}
						/>
						{errors["date"] && (
							<span className="text-sm text-red-500">{errors["date"]}</span>
						)}
					</div>
					<div>
						<Label htmlFor="time" label="Time" />
						<div className="relative">
							<Input
								id="time"
								name="time"
								type="text"
								placeholder="--:-- --"
								value={formData.step2.time}
								onChange={handleChange}
								className="pl-10"
							/>
							<Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
						{errors["time"] && (
							<span className="text-sm text-red-500">{errors["time"]}</span>
						)}
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label htmlFor="type" label="Type" />
						<Select
							id="type"
							name="type"
							value={formData.step2.type}
							onChange={handleChange}
							options={[
								"General Consultation",
								"Follow-up",
								"Specialist Consultation",
							]}
						/>
					</div>
					<div>
						<label
							htmlFor="document"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Document to attach
						</label>
						<div className="flex items-center space-x-4">
							<label
								htmlFor="file-upload"
								className="cursor-pointer bg-dark-blue text-white text-xs md:text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
							>
								Choose File
								<Input
									name="file"
									type="file"
									id="file-upload"
									//onChange={handleFileChange}
									className="hidden"
								/>
							</label>
							<span className="text-gray-600 text-xs md:text-sm">
								{formData.step2.file
									? formData.step2.file.name
									: "No file chosen"}
							</span>
						</div>
					</div>
				</div>
				<div>
					<label
						htmlFor="reason"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Reason of consultation
					</label>
					<textarea
						id="reason"
						name="reason"
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
						value={formData.step2.reason}
						onChange={handleChange}
					></textarea>
					{errors["reason"] && (
						<span className="text-sm text-red-500">{errors["reason"]}</span>
					)}
				</div>
				<div className="flex justify-between gap-4">
					<Button
						type="button"
						variant="linear_color"
						className="w-52"
						onClick={handlePrev}
					>
						Prev
					</Button>
					<Button type="submit" variant="linear_color" className="w-52">
						Book now
					</Button>
				</div>
			</form>
		</div>
	);
};

export default BookStepTwo;
