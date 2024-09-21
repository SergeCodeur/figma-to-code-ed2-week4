import { ArrowRight } from "@/assets/icons";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="mt-12 px-6 md:px-28 flex flex-col-reverse items-center justify-center lg:flex-row gap-x-10 gap-y-4">
			<div className="w-full h-aboutUS-imgDiv-h md:w-aboutUS-imgDiv-w flex items-center justify-center lg:justify-start overflow-hidden">
				<div className="relative h-96 w-80 md:w-about-img-w md:h-about-img-h">
					<Image
						src={"/images/about-us.webp"}
						alt="About Us"
						fill
						objectFit="cover"
					/>
					<div className=""></div>
					<Image
						className="absolute -top-16 -right-16"
						src={"/images/about-us-top.webp"}
						alt="About Us"
						height={128}
						width={146}
						objectFit="cover"
					/>
					<Image
						className="absolute -bottom-44 -right-40"
						src={"/images/about-us-bottom.webp"}
						alt="About Us"
						height={352}
						width={320}
						objectFit="cover"
					/>
				</div>
			</div>
			<div className="w-full md:w-aboutUs-w h-fit flex flex-col items-start gap-10 justify-center">
				<div className="w-full flex flex-col items-start gap-1">
					<h1 className="title-style">About Us</h1>
					<span className="text-lg lg:text-2xl font-semibold uppercase text-secondary">
						PRO HEALTH
					</span>
				</div>
				<div className="flex flex-col items-start gap-6">
					<div className="flex items-start gap-2">
						<span>
							<ArrowRight className="w-5 h-5" />
						</span>
						<div className="">
							<h2 className="font-normal text-2xl text-slate-400">
								ProHealth is a team of experienced medical professionals
							</h2>
							<div className="mt-6 font-normal text-base text-slate-400">
								Dedicated to providing top-quality healthcare services. We
								believe in a holistic approach to healthcare that focuses on
								treating the whole person, not just the illness or symptoms.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
