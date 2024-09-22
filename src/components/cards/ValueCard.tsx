import { OurValueProps } from "@/types";

const ValueCard: React.FC<OurValueProps> = ({
	icon: Icon,
	title,
	description,
}) => {
	return (
		<div className="rounded-3xl bg-background p-7 space-y-8 shadow-card max-w-96">
			<div className="flex justify-center gap-3.5">
				<div className="w-[45px] h-[45px] bg-[#307BC4] rounded-full flex justify-center items-center">
					<Icon />
				</div>
				<h3 className="text-[28px] font-semibold text-dark-blue">{title}</h3>
			</div>
			<p className="text-base text-dark-blue/50">{description}</p>
		</div>
	);
};

export default ValueCard;
