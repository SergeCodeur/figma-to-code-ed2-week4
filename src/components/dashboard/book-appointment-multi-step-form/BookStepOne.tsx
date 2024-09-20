import Button from "@/components/ui/Button";

const BookStepOne = ({
	handleNext,
	handleExit,
}: {
	handleNext: () => void;
	handleExit: () => void;
}) => {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Personal Information</h2>
			<form className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="firstname"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Fist name
						</label>
						<input
							type="text"
							id="firstname"
							placeholder=""
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label
							htmlFor="lastname"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Last name
						</label>
						<input
							type="text"
							id="lastname"
							placeholder=""
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Phone number
						</label>
						<input
							type="text"
							id="phone"
							placeholder=""
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label
							htmlFor="Email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email
						</label>
						<input
							type="text"
							id="Email"
							placeholder=""
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="reason"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Adress
					</label>
					<input
						type="text"
						id="adress"
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
				</div>
				<div className="flex justify-between mt-4">
					<Button type="button" className="w-52" onClick={handleExit}>
						Exit
					</Button>
					<Button
						type="button"
						variant="linear_color"
						className="w-52"
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
