interface InputProps {
	type: string;
	id: string;
	name: string;
	placeholder?: string;
	className?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	type,
	id,
	name,
	placeholder,
	className,
	value,
	onChange,
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={`w-full text-xs md:text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		/>
	);
};

export default Input;
