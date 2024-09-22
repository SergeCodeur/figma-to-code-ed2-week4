import { FilledCircle } from "@/assets/icons";
import { TestimonialsProps } from "@/types";
import Image from "next/image";

const TestimonialsCard: React.FC<TestimonialsProps> = ({
	name,
	image,
	country,
	active,
}) => {
	return (
		<div
			className={`w-full flex relative ${
				active ? "justify-center" : "justify-start"
			}`}
		>
			<FilledCircle
				className={`${
					active ? "-right-[18px]" : "-right-[12px]"
				} absolute top-2/4 -translate-y-2/4 text-sky-500`}
				width={active ? 23 : 16}
				height={active ? 23 : 16}
			/>
			<div
				className={`${
					active ? "w-96 shadow-card" : "w-80"
				} rounded-3xl flex items-center py-5 px-7 gap-5`}
			>
				<Image src={image} alt={name} width={80} height={80} />
				<div>
					<h4 className="text-xl font-semibold">{name}</h4>
					<p className="text-base text-dark-blue/50">{country}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard;
