import Image from "next/image";

type PatientDetailsCardHeaderProps = {
	name: string;
	id?: string;
	phoneNumber?: string;
	address: string;
	appointments: number;
	completed: number;
	avatar: string;
};

const PatientDetailsCardHeader: React.FC<PatientDetailsCardHeaderProps> = ({
	name,
	id,
	phoneNumber,
	address,
	appointments,
	completed,
	avatar,
}) => {
	return (
		<div className="flex flex-col items-center border border-dark-blue/20 rounded-2xl p-5 w-full">
			<Image
				src={avatar}
				alt={`${name}'s avatar`}
				width={98}
				height={98}
				className="rounded-full border border-dark-blue"
			/>
			<div className="space-y-2.5 text-center mt-2.5">
				<h3 className="text-base font-semibold">{name}</h3>
				<ul className="space-y-2.5 text-xs md:text-sm">
					{id && (
						<li className="font-light">
							Patient ID: <span className="font-medium">{id}</span>
						</li>
					)}
					{phoneNumber && (
						<li className="font-light">
							Phone number: <span className="font-medium">{phoneNumber}</span>
						</li>
					)}
					<li className="font-light">
						<p>{address}</p>
					</li>
				</ul>
			</div>
			<div className="flex justify-between gap-7 w-fit h-full mt-2.5">
				<div className="space-y-1 md:space-y-2.5  text-center">
					<span className="md:text-3xl text-2xl font-medium">
						{appointments}
					</span>
					<p className="font-medium text-xs md:text-sm">Appointments</p>
				</div>
				<div>
					<span className="w-[1px] bg-dark-blue h-full block"></span>
				</div>
				<div className="space-y-1 md:space-y-2.5 text-center">
					<span className="md:text-3xl text-2xl font-medium">{completed}</span>
					<p className="font-medium text-xs md:text-sm">Completed</p>
				</div>
			</div>
		</div>
	);
};

export default PatientDetailsCardHeader;
