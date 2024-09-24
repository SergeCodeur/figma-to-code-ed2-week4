import { Clock } from "@/assets/icons";
import Button from "@/components/ui/Button";
import { useBookAppointment } from "@/contexts/BookAppointmentFormContext";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

const BookStepTwo = ({ handlePrev }: { handlePrev: () => void }) => {
	const { toggleBookAppointment, updateFormData, formData } =
		useBookAppointment();

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		updateFormData({ [name]: value });
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			updateFormData({ file: e.target.files[0] });
		}
	};

	const handleSubmit = () => {
		toggleBookAppointment();

		// ceci est juste un test
		console.log(formData);
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
							value={formData.date}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Label htmlFor="time" label="Time" />
						<div className="relative">
							<Input
								id="time"
								name="time"
								type="text"
								placeholder="--:-- --"
								value={formData.time}
								onChange={handleChange}
								className="pl-10"
							/>
							<Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Label htmlFor="type" label="Type" />
						<Select
							id="type"
							name="type"
							value={formData.type}
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
									onChange={handleFileChange}
									className="hidden"
								/>
							</label>
							<span className="text-gray-600 text-xs md:text-sm">
								{formData.file ? formData.file.name : "No file chosen"}
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
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
						value={formData.reason}
						onChange={handleChange}
					></textarea>
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
