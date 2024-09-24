import Image from "next/image";
import TestimonialsCard from "./ui/TestimonialsCard";

export default function PatientAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen w-screen">
			<div className="hidden flex-1 bg-gradient-to-r from-[#D2EAEF] to-[#86BBF1] bg-cover order-last lg:flex relative">
				<div className="space-y-12 w-full">
					<div className="space-y-3 pt-8 pl-12 flex flex-col">
						<h3 className="text-3xl text-foreground font-bold">
							We give the best experience
						</h3>
						<p className="max-w-sm text-foreground text-base">
							Dedicated virtual-consultation platform for doctors and patients
							to help them consult across various channels
						</p>
					</div>
					<div className="space-y-4">
						<div className="flex justify-center items-center">
							<TestimonialsCard
								color="text-foreground"
								fill={4}
								image="/images/profile.png"
								name="Eleanor Pena"
								rating={5}
								text={`"This was my first time booking a car through doctrinmade the experience
				worth it. My friend and i highly.recommended this App. Thank you for the
				greatexperience, we looking forward to booking again`}
							/>
						</div>
						<div className="flex space-x-8">
							<div className="ml-8">
								<TestimonialsCard
									color="text-foreground"
									fill={3}
									image="/images/profile.png"
									name="John doe"
									rating={5}
									text={`"This was my first time booking a car through doctrinmade the experience
				worth it. My friend and i highly.recommended this App. Thank you for the
				greatexperience, we looking forward to booking again`}
								/>
							</div>

							<Image
								src="/images/doctor.png"
								alt={`doctor picture`}
								className="absolute bottom-0 right-0"
								width={260}
								height={200}
								priority
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center bg-white">
				<div className="max-w-md overflow-y-auto px-4 sm:w-[500px]">
					{children}
				</div>
			</div>
		</div>
	);
}
