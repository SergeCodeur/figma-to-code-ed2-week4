import { ContactItemProps } from "@/types";
import React from "react";

const ContactItem: React.FC<ContactItemProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<div className="contact-item flex items-center space-x-2 min-w-48">
			<div className="icon bg-[#307BC4] p-2 rounded-full">{icon}</div>
			<div>
				<h4 className="font-medium">{title}</h4>
				<p className="text-dark-blue/50">{description}</p>
			</div>
		</div>
	);
};

export default ContactItem;
