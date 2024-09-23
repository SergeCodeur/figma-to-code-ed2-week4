type ButtonProps = {
	variant?:
		| "default"
		| "linear_color"
		| "outline"
		| "ghost"
		| "linear_color_shadow";
	children: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	variant,
	children,
	className,
	...props
}: any) => {
	let variantClasses = "";

	switch (variant) {
		case "linear_color":
			variantClasses =
				"bg-gradient-to-b from-[#307bc4] to-[#274760] text-white";
			break;
		case "linear_color_shadow":
			variantClasses =
				"bg-gradient-to-b from-[#307bc4] to-[#274760] text-white shadow-light-blue !rounded-3xl px-8 py-3";
			break;
		case "outline":
			variantClasses = "bg-none border border-dark-blue text-dark-blue";
			break;
		case "ghost":
			variantClasses = "bg-none border border-none text-dark-blue";
			break;
		default:
			variantClasses = "bg-blue/20 text-dark-blue";

			break;
	}

	return (
		<button
			{...props}
			className={`inline-flex justify-center items-center gap-2.5 rounded-lg px-4 py-2.5 text-xs md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-dark-blue focus:ring-offset-1 ${variantClasses} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
