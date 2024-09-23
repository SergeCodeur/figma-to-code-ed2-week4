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

export type AppointmentNoteDetailsProps = {
	title: string;
	description: string;
	treatment: string;
	time: string;
	duration?: string;
	document?: string;
	date?: string;
};

export interface DatePickerProps {
	id: string;
	name: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export interface InputProps {
	type: string;
	id: string;
	name: string;
	placeholder?: string;
	className?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
	htmlFor: string;
	label: string;
	className?: string;
}

export interface SelectProps {
	id: string;
	value: string;
	name?: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	options: string[];
	className?: string;
}
