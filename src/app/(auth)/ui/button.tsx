import { FC, ForwardedRef, forwardRef, ReactNode } from "react";

interface IButton {
	children: ReactNode;
	handleFunction?: () => void;
}

type ButtonProps = IButton & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = forwardRef(
	(props, ref: ForwardedRef<HTMLButtonElement>) => {
		const { children, handleFunction, ...rest } = props;
		return (
			<button {...rest} onClick={handleFunction} ref={ref}>
				{children}
			</button>
		);
	},
);

export default Button;
