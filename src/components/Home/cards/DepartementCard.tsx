import { DepartmentsListProps } from "@/types";
import Image from "next/image";

const DepartementCard: React.FC<DepartmentsListProps> = ({ image, title }) => {
	return (
		<div className="max-w-[234px] w-full bg-background shadow-card py-16 rounded-2xl flex items-center justify-between h-[290px] flex-col gap-5">
			<Image src={image} alt={title} width={73} height={73} />
			<h4 className="text-xl font-medium text-center lg:max-w-[135px]">
				{title}
			</h4>
		</div>
	);
};

export default DepartementCard;
