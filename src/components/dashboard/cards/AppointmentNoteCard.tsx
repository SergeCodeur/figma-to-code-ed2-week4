import { Calendar, FilledCircle } from "@/assets/icons";
import AppointmentNoteDetails, {
	AppointmentNoteDetailsProps,
} from "./AppointmentNoteDetails";

type AppointmentNoteCardProps = {
	date: string;
	details: AppointmentNoteDetailsProps;
};

const AppointmentNoteCard: React.FC<AppointmentNoteCardProps> = ({
	date,
	details,
}) => {
	return (
		<div className="flex gap-2.5">
			<div className="pt-6">
				<FilledCircle />
			</div>
			<div className="py-5 space-y-2.5">
				<div className="flex gap-2.5">
					<Calendar />
					<h3 className="font-semibold text-base">{date}</h3>
				</div>
				<AppointmentNoteDetails
					title={details.title}
					description={details.description}
					treatment={details.treatment}
					time={details.time}
					duration={details.duration}
					document={details.document}
				/>
			</div>
		</div>
	);
};

export default AppointmentNoteCard;
