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

export interface ContactItemProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export interface OurValueProps {
	icon: React.FC<SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
}

export interface DepartmentsListProps {
	image: string;
	title: string;
}

export interface TestimonialsProps {
	image: string;
	name: string;
	country: string;
	active?: boolean;
}

export interface ICard {
	name: string;
	image: string;
	rating: number;
	fill: number;
	color: string;
	text: string;
}
