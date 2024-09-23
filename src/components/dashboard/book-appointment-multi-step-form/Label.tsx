import { LabelProps } from "@/types";

const Label: React.FC<LabelProps> = ({ htmlFor, label, className }) => {
	return (
		<label
			htmlFor={htmlFor}
			className={`block text-xs md:text-sm font-medium text-gray-700 mb-1 ${className}`}
		>
			{label}
		</label>
	);
};

export default Label;
