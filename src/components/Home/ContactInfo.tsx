import { ChevronRight, Location, Phone, Stethoscope } from "@/assets/icons";
import Link from "next/link";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
	return (
		<div className="bg-background p-7 lg:p-20 rounded-2xl flex flex-wrap h-fit justify-between items-center shadow-card gap-y-5">
			<ContactItem
				icon={<Phone />}
				title="Hotline"
				description="123-456-7890"
			/>
			<ContactItem
				icon={<Stethoscope />}
				title="Ambulance"
				description="876-256-876"
			/>
			<ContactItem
				icon={<Location />}
				title="Location"
				description="New York, US"
			/>
			<Link
				href="/role-selection"
				className="bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3 lg:flex justify-center items-center gap-2.5 hidden"
			>
				Book now <ChevronRight />
			</Link>
		</div>
	);
};

export default ContactInfo;
