import { Play, PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import DefaultButton from "../default-button";

interface Item {
	src: string;
	label: string;
	text: string;
}

const HeroSection = () => {
	//
	const items: Item[] = [
		{
			src: "/icons/hotline.svg",
			label: "Hotline",
			text: "123-456-7890",
		},
		{
			src: "/icons/ambulance.svg",
			label: "Ambulance",
			text: "876-256-876",
		},
		{
			src: "/icons/location_2.svg",
			label: "Location",
			text: "New York, US",
		},
	];
	//
	return (
		<div className="relative">
			<div className="w-full bg-hero-bg flex px-2 md:px-20 flex-col md:flex-row justify-center">
				{/* Left Section */}
				<div className=" flex flex-col items-start w-full md:h-hero-text-h md:w-hero-text-w mt-5 md:mt-16">
					<h1 className="text-3xl lg:text-6xl font-semibold text-primary">
						Your Partner in Health and Wellness
					</h1>
					<p className="text-xl text-primary md:mt-7 mt-3">
						We are committed to providing you with the best medical and
						healthcare services to help you live healthier and happier.
					</p>
					<button className="flex items-center gap-3 mt-10 md:mt-28 text-xl text-primary">
						<Image
							src={"/icons/play-circle.svg"}
							alt="Play Video"
							height={50}
							width={50}
							loading="lazy"
						/>
						See how we work
					</button>
				</div>

				{/* Right Section */}
				<div className="w-full h-80 md:h-[650px] lg:h-lg md:w-lg bg-hero-img bg-contain bg-no-repeat"></div>
			</div>

			{/* Info Section */}
			<div className="py-4 px-10 w-full flex-wrap h-32 md:w-11/12 rounded-xl bg-background flex items-center justify-between gap-4 md:gap-24 relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-16">
				{items.map(item => (
					<div key={item.label} className="flex items-center gap-3">
						<div className="rounded-full bg-primary p-2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
							<Image
								src={item.src}
								alt={item.label}
								height={20}
								width={20}
								loading="lazy"
							/>
						</div>
						<div className="flex flex-col items-start gap-1">
							<h3 className="text-base font-semibold text-primary">
								{item.label}
							</h3>
							<span className="text-slate-400 font-normal text-sm">
								{item.text}
							</span>
						</div>
					</div>
				))}
				<div className=""><DefaultButton text="Book Now" /></div>
			</div>
		</div>
	);
};

export default HeroSection;
