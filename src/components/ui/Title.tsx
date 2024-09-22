const Title = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: String;
}) => {
	return (
		<h2 className={`text-dark-blue font-bold text-5xl ${className}`}>
			{children}
		</h2>
	);
};

export default Title;
