import { ArrowDown } from "@/assets/icons";
import { SelectProps } from "@/types";
import React from "react";

const Select: React.FC<SelectProps> = ({
	id,
	value,
	name,
	onChange,
	options,
	className,
}) => {
	return (
		<div className="relative">
			<select
				id={id}
				className={`w-full text-xs md:text-sm pl-3 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
				name={name}
				value={value}
				onChange={onChange}
			>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			<ArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
		</div>
	);
};

export default Select;
