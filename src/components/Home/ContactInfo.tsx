import { ChevronRight, Location, Phone, Stethoscope } from "@/assets/icons";
import Link from "next/link";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
	return (
		<div className="bg-background p-20 rounded-2xl flex justify-between items-center shadow-card lg:h-36">
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
				href="/doctor-login"
				className="bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3 flex justify-center items-center gap-2.5"
			>
				Book now <ChevronRight />
			</Link>
		</div>
	);
};

export default ContactInfo;
