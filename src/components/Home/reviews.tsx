import Image from "next/image";
import React from "react";

interface clients {
	icon: string;
	name: string;
	country: string;
}

const Reviews = () => {
	//
	const clientsList: clients[] = [
		{
			icon: "/images/avatar-1.png",
			name: "Paulo Hubert",
			country: "New York, USA",
		},
		{
			icon: "/images/avatar-2.png",
			name: "Laurence Vendetta",
			country: "California, USA",
		},
		{
			icon: "/images/avatar-3.png",
			name: "Cassendra Raul",
			country: "Florida",
		},
	];
	//
	return (
		<div className="mt-20 lg:mt-36 px-6 md:px-28 w-full flex flex-col gap-10 items-center justify-center">
			<div className="w-full flex items-center justify-center flex-col gap-1">
				<h1 className="title-style">Some Reviews</h1>
				<span className="text-lg lg:text-2xl font-semibold uppercase text-secondary">
					of our clients
				</span>
			</div>
			<div className="w-full flex items-center p-0 lg:p-14 justify-center gap-7 flex-col lg:flex-row">
				<div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-3 border-r border-primary">
					{clientsList.map((val, i) => (
						<div
							key={i}
							className={`${
								i === 1 ? "lg:px-28 px-16" : "lg:px-9 px-7"
							} relative flex items-center justify-start gap-2 py-6 w-full h-32`}
						>
							<div
								className={`${
									i === 1
										? "absolute h-2 w-2 rounded-full bg-primary top-1/2 -right-[4px]"
										: "absolute h-1 w-1 rounded-full bg-primary top-1/2 -right-[2px]"
								}`}
							/>
							<Image src={val.icon} alt={val.name} height={80} width={80} />
							<div className="flex items-start flex-col justify-center">
								<h2>{val.name}</h2>
								<span>{val.country}</span>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-3 w-full lg:w-1/2">
					<Image src={"/icons/quote.svg"} alt="Quote" height={50} width={50} />
					<div className="flex items-start gap-2 flex-col ml-14">
						<p className="font-normal text-base text-slate-400">
							The pediatrician was great with him and made him feel at ease, and
							the entire staff was kind and attentive. I recently had to bring
							my child to ProHealth for a minor injury, and I was so impressed
							with the care he received.
						</p>
						<Image
							src={"/icons/rating.svg"}
							alt="Quote"
							height={16}
							width={90}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
