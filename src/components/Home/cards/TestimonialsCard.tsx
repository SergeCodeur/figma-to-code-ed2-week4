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
					active ? "sm:w-96 w-full shadow-card" : "sm:w-80 w-full"
				} rounded-3xl flex items-center py-5 px-7 gap-5 max-sm:mr-3`}
			>
				<Image src={image} alt={name} width={70} height={70} />
				<div>
					<h4 className="sm:text-xl text-base font-semibold">{name}</h4>
					<p className="sm:text-base text-sm text-dark-blue/50">{country}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard;
