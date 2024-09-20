import { SVGProps } from "react";

export type SidebarLinkProps = {
	label: string;
	href: string;
	icon: React.FC<IconProps>;
	isActive?: boolean;
};

export interface IconProps extends SVGProps<SVGSVGElement> {
	width?: number;
	height?: number;
}

export type PatienCardProps = {
	id: string;
	img: string;
	gender: string;
	firstName: string;
	lastName: string;
	adress: string;
	weight: string;
	bloodPressure: string;
	bloodGlucose: string;
	className?: string;
};
