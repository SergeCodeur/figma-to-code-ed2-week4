"use client";
import ValueCard from "@/components/home/cards/ValueCard";
import Title from "@/components/ui/Title";
import { OurValue } from "@/constants/OurValues";

const OurValues = () => {
	//
	return (
		<div className="xs:mt-52 mt-16 container">
			<Title className="text-center">Our Value</Title>
			<div className="mt-10 flex flex-wrap gap-10 justify-center items-center">
				{OurValue.map((val, i) => (
					<ValueCard key={i} {...val} />
				))}
			</div>
		</div>
	);
};

export default OurValues;
