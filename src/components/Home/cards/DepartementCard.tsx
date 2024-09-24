import { DepartmentsListProps } from "@/types";
import Image from "next/image";

const DepartementCard: React.FC<DepartmentsListProps> = ({ image, title }) => {
	return (
		<div className="lg:max-w-[234px] max-w-36 w-full bg-background shadow-card lg:py-16 py-5 rounded-2xl flex items-center justify-between lg:h-[290px] flex-col gap-5">
			<Image src={image} alt={title} width={73} height={73} />
			<h4 className="text-sm sm:text-xl font-medium text-center lg:max-w-[135px]">
				{title}
			</h4>
		</div>
	);
};

export default DepartementCard;
