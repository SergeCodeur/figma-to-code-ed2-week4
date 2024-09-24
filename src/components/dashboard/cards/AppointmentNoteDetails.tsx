import { AppointmentNoteDetailsProps } from "@/types";

const AppointmentNoteDetailsCard: React.FC<AppointmentNoteDetailsProps> = ({
	title,
	description,
	treatment,
	time,
	duration,
	document,
	date,
}) => {
	return (
		<div className="p-5 border border-dark-blue/20 bg-blue/20 rounded-2xl space-y-5">
			<div className="space-y-2.5">
				<h3 className="font-semibold text-sm md:text-base">{title}</h3>
				<p className="text-xs md:text-sm">{description}</p>
			</div>
			<hr className="border-dark-blue/20" />
			<ul className="flex flex-wrap gap-5 justify-between">
				<li className="text-xs md:text-sm flex flex-col min-w-[100px]">
					<h4>Treatment</h4>
					<p className="font-semibold">{treatment}</p>
				</li>
				{date && (
					<li className="text-xs md:text-sm flex flex-col min-w-[100px]">
						<h4>Date</h4>
						<p className="font-semibold">{date}</p>
					</li>
				)}
				<li className="text-xs md:text-sm flex flex-col min-w-[100px]">
					<h4>Time</h4>
					<p className="font-semibold">{time}</p>
				</li>
				{duration && (
					<li className="text-xs md:text-sm flex flex-col min-w-[100px]">
						<h4>Duration</h4>
						<p className="font-semibold">{duration}</p>
					</li>
				)}
				{document && (
					<li className="text-xs md:text-sm flex flex-col min-w-[100px]">
						<h4>Document</h4>
						<p className="font-semibold">{document}</p>
					</li>
				)}
			</ul>
		</div>
	);
};

export default AppointmentNoteDetailsCard;
