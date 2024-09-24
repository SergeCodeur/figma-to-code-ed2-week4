"use client";
import Button from "@/components/ui/Button";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import Input from "./Input";
import Label from "./Label";

const BookStepOne = ({ handleNext }: { handleNext: () => void }) => {
	const { formData, updateFormData } = useBookAppointment();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		updateFormData({ [name]: value });
	};

	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Personal Information</h2>
			<form className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label htmlFor="firstname" label="Firstname" />
						<Input
							name="firstname"
							type="text"
							id="firstname"
							onChange={handleChange}
							value={formData.firstname}
						/>
					</div>
					<div>
						<Label htmlFor="lastname" label="Last name" />
						<Input
							name="lastname"
							type="text"
							id="lastname"
							onChange={handleChange}
							value={formData.lastname}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label htmlFor="phone" label="Phone number" />
						<Input
							name="phone"
							type="tel"
							id="phone"
							onChange={handleChange}
							value={formData.phone}
						/>
					</div>
					<div>
						<Label htmlFor="email" label="Email" />
						<Input
							name="email"
							type="email"
							id="email"
							onChange={handleChange}
							value={formData.email}
						/>
					</div>
				</div>
				<div>
					<Label htmlFor="adress" label="Adress" />
					<Input
						name="address"
						type="text"
						id="address"
						onChange={handleChange}
						value={formData.address}
					/>
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
