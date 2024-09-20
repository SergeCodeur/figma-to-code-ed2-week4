import { Analytics, Calendar, UserGroup } from "@/assets/icons";
import { SidebarLinkProps } from "@/types";

export const sidebarLinks: SidebarLinkProps[] = [
	{
		icon: Analytics,
		label: "Dashboard",
		href: "#",
	},
	{
		icon: UserGroup,
		label: "Patient List",
		href: "/dashboard-doctor/patient-list",
	},
	{
		icon: Calendar,
		label: "Appointment",
		href: "#",
	},
];
