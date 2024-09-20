type ButtonProps = {
	variant?: "default" | "linear_color";
	children: React.ReactNode;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	variant,
	children,
	className,
	...props
}: any) => {
	const variantClass =
		variant === "linear_color"
			? "bg-gradient-to-b from-[#307bc4] to-[#274760] text-white"
			: "bg-blue/20 text-black";

	return (
		<button
			{...props}
			className={`inline-flex justify-center items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-dark-blue focus:ring-offset-2 ${variantClass} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
