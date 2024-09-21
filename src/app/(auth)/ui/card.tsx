import Image from "next/image";
import React, { FC } from "react";
import Rating from "./rating";
interface ICard {
	name: string;
	image: string;
	rating: number;
	fill: number;
	color: string;
	text: string;
}

const Card: FC<ICard> = props => {
	const { image, name, rating, text, fill, color } = props;
	const renderRatings = Array.from({ length: rating }, (_, index) => (
		<Rating key={index} color={fill > index ? color : ""} />
	));

	return (
		<div
			className="block max-w-sm p-5 bg-white border
		 border-gray-200 rounded-2xl space-y-3 shadow"
		>
			<div className="flex space-x-4">
				<Image
					src={image}
					alt={`${name}'s profile picture`}
					className="rounded-full border border-[#86BBF1]"
					width={47}
					height={47}
					priority
				/>
				<div className="flex flex-col pt-1 space-y-1">
					<span className="text-sm text-[#414870]">{name}</span>
					<div className="flex space-x-1">{renderRatings}</div>
				</div>
			</div>
			<p className="font-normal text-sm text-[#27476080]">{text}</p>
		</div>
	);
};

export default Card;
