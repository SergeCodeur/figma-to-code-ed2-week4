import { FC, ForwardedRef, forwardRef } from "react";

interface IInput {
	handleFunction?: () => void;
}
type InputProps = IInput & React.InputHTMLAttributes<HTMLInputElement>;
const Input: FC<InputProps> = forwardRef(
	(props, ref: ForwardedRef<HTMLInputElement>) => {
		const { handleFunction, ...rest } = props;
		return (
			<input
				className="w-full px-3 py-2 border border-blue/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-base"
				{...rest}
				onClick={handleFunction}
				ref={ref}
			/>
		);
	},
);

export default Input;
