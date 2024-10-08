"use client";
import Image from "next/image";
import Button from "../ui/Button";

const AppointmentDetails = ({
	image,
	name,
	adress,
	interest,
	date,
	problem,
	onClose,
}: AppointmentDetailsProps) => {
	return (
		<div className="fixed top-0 bottom-0 right-0 w-full h-screen bg-black bg-opacity-15 z-10 transition-opacity duration-500 ease-in-out opacity-100">
			<div className="bg-white absolute right-0 max-w-[440px] h-screen shadow-lg flex flex-col justify-between">
				<div className="flex items-center justify-between border-b border-gray p-4">
					<h2 className="text-lg lgtext-2xl font-semibold">
						Appointment details
					</h2>
					<Image
						src="/icons/cancel.svg"
						alt="icon logo"
						className="cursor-pointer"
						onClick={onClose}
						width={20}
						height={20}
					/>
				</div>
				<div className="p-5 space-y-5 overflow-y-auto custom-scrollbar">
					<div className="rounded-xl m-2 flex flex-col gap-2 border border-gray">
						<div className="bg-blue/20 p-5 rounded-tl-xl rounded-tr-xl">
							<h3 className="text-center text-xs font-semibold uppercase text-dark-blue">
								Patient information
							</h3>
						</div>
						<div className="flex items-center gap-2 p-5">
							<Image
								src={`/images/${image}.png`}
								alt={name}
								width={65}
								height={65}
							/>
							<ul className="flex flex-col">
								<li className="font-semibold text-base lg:text-xl">{name}</li>
								<li className="font-light text-sm lg:text-base">{adress}</li>
							</ul>
						</div>
					</div>
					<div className="rounded-xl m-2 flex flex-col gap-2 border border-gray">
						<div className="bg-blue/20 p-5 rounded-tl-xl rounded-tr-xl ">
							<h3 className="text-center text-xs font-semibold uppercase text-dark-blue">
								Appointment details
							</h3>
						</div>
						<div className="flex flex-col gap-2 p-5">
							<div className="flex flex-col">
								<h4 className="text-[#B4B4B4] text-sm lg:text-[15px] font-medium">
									Date
								</h4>
								<p className="text-dark-blue font-semibold text-xs lg:text-sm">
									{date}
								</p>
							</div>
							<div className="flex flex-col">
								<h4 className="text-[#B4B4B4] text-sm lg:text-[15px] font-medium">
									Area of interest
								</h4>
								<p className="text-dark-blue font-semibold text-xs lg:text-sm">
									{interest}
								</p>
							</div>
							<div className="flex flex-col">
								<h4 className="text-[#B4B4B4] text-sm lg:text-[15px] font-medium">
									Problem
								</h4>
								<p className="text-dark-blue font-semibold text-xs lg:text-sm">
									{problem}
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-xl m-2 flex flex-col gap-2 border border-gray">
						<div className="bg-blue/20 p-5 rounded-tl-xl rounded-tr-xl ">
							<h3 className="text-center text-xs font-semibold uppercase text-dark-blue">
								Documentation
							</h3>
						</div>
						<div className="flex items-center flex-col gap-2 p-5">
							<button className="border p-2 border-gray flex items-center justify-between w-full rounded-xl">
								<div className="flex items-center gap-2">
									<Image
										src="/icons/file.svg"
										alt="icon logo"
										className="cursor-pointer"
										width={20}
										height={20}
									/>
									<span className="text-xs md:text-sm lg:text-base">
										Medicalcheck-up.pdf
									</span>
								</div>
								<Image
									src="/icons/download-square.svg"
									alt="icon logo"
									className="cursor-pointer"
									width={20}
									height={20}
								/>
							</button>
							<button className="border p-2 border-gray flex items-center justify-between w-full rounded-xl">
								<div className="flex items-center gap-2">
									<Image
										src="/icons/file.svg"
										alt="icon logo"
										className="cursor-pointer"
										width={20}
										height={20}
									/>
									<span className="text-xs md:text-sm lg:text-base">
										Control-last-month.pdf
									</span>
								</div>
								<Image
									src="/icons/download-square.svg"
									alt="icon logo"
									className="cursor-pointer"
									width={20}
									height={20}
								/>
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 py-4 px-6 max-lg:flex-col">
					<Button variant="outline" className="max-lg:w-full !text-sm">
						Decline appointment
					</Button>
					<Button variant="linear_color" className="max-lg:w-full !text-sm">
						Accept appointment
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AppointmentDetails;
