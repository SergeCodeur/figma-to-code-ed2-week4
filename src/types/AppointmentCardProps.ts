export interface AppointmentCardProps {
	id: string;
	image: string;
	name: string;
	date: string;
	raison: string;
	address: string;
	interest: string;
	problem: string;
	time: string;
	onDecline?: () => void;
}
