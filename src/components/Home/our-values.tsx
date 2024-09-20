import Image from "next/image";
import React from "react";

interface value {
	src: string;
	title: string;
	description: string;
}

const OurValues = () => {
	//
	const values: value[] = [
		{
			src: "/icons/compassion.svg",
			title: "Compassion",
			description:
				"We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.",
		},
		{
			src: "/icons/excellence.svg",
			title: "Excellence",
			description:
				"We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
		},
		{
			src: "/icons/integrity.svg",
			title: "Integrity",
			description:
				" We believe in practicing medicine with integrity and honesty. We are transparent in our communication andecision-making processes, and we always put our patient's interests first & povide best solution.",
		},
		{
			src: "/icons/compassion.svg",
			title: "Respect",
			description:
				" We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
		},
		{
			src: "/icons/compassion.svg",
			title: "Teamwork",
			description:
				"We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.",
		},
	];
	//
	return (
		<div className="mt-28 px-6 md:px-16">
			<h1 className="title-style text-center">Our Values</h1>
			<div className="mt-10 flex flex-wrap gap-x-14 gap-y-5 justify-center items-center">
				{values.map((val, i) => (
					<div key={i} className={`${i===1 && "lg:mb-10 mb-0"} h-fit max-w-96 flex flex-col justify-center items-center gap-8 rounded shadow py-12 px-7`}>
						<div className="flex items-center justify-center gap-2">
							<div className="rounded-full bg-primary w-7 h-7 flex items-center justify-center">
								<Image
									src={val.src}
									alt={val.title}
									height={15}
									width={15}
									loading="lazy"
								/>
							</div>
                            <h1 className="font-semibold lg:text-3xl text-2xl text-primary">{val.title}</h1>
						</div>
                        <div className="font-normal text-center text-base text-slate-400">
                            {val.description}
                        </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurValues;
