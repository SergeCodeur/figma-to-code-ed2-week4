import { ArrowDown, Calendar, Clock } from "@/assets/icons";
import Button from "@/components/ui/Button";
import { useState } from "react";

const BookStepTwo = ({ handlePrev }: { handlePrev: () => void }) => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [type, setType] = useState("General Consultation");
	const [reason, setReason] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ date, time, type, reason, file });
	};

	return (
		<div>
			<h2 className="text-lg font-semibold mb-5">Appointment Details</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="date"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Date
						</label>
						<div className="relative">
							<input
								type="text"
								id="date"
								placeholder="dd/mm/yyyy"
								className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={date}
								onChange={e => setDate(e.target.value)}
							/>
							<Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>
					<div>
						<label
							htmlFor="time"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Time
						</label>
						<div className="relative">
							<input
								type="text"
								id="time"
								placeholder="--:-- --"
								className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={time}
								onChange={e => setTime(e.target.value)}
							/>
							<Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="type"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Type
						</label>
						<div className="relative">
							<select
								id="type"
								className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={type}
								onChange={e => setType(e.target.value)}
							>
								<option>General Consultation</option>
								<option>Follow-up</option>
								<option>Specialist Consultation</option>
							</select>
							<ArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
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
								className="cursor-pointer bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
							>
								Choose File
								<input
									id="file-upload"
									type="file"
									className="hidden"
									onChange={handleFileChange}
								/>
							</label>
							<span className="text-gray-600">
								{file ? file.name : "No file chosen"}
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
						value={reason}
						onChange={e => setReason(e.target.value)}
					></textarea>
				</div>
				<div className="flex justify-between">
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
