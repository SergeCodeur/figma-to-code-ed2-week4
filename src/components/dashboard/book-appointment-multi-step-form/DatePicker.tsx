import { Calendar } from "@/assets/icons";
import { DatePickerProps } from "@/types";
import React from "react";

const DatePicker: React.FC<DatePickerProps> = ({
	id,
	value,
	name,
	onChange,
	className,
}) => {
	return (
		<div className="relative">
			<input
				type="date"
				id={id}
				name={name}
				placeholder="dd/mm/yyyy"
				className={`w-full text-xs md:text-sm pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
				value={value}
				onChange={onChange}
			/>
			<Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
		</div>
	);
};

export default DatePicker;
