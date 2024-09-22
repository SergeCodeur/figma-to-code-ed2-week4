import { Location, Phone, Stethoscope } from "@/assets/icons";
import Button from "../ui/Button";
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
			<Button variant="linear_color_shadow">Book Now →</Button>
		</div>
	);
};

export default ContactInfo;
