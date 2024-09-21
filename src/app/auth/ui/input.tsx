import { FC, ForwardedRef, forwardRef } from "react";

interface IInput {
	handleFunction?: () => void;
}
type InputProps = IInput & React.InputHTMLAttributes<HTMLInputElement>;
const Input: FC<InputProps> = forwardRef(
	(props, ref: ForwardedRef<HTMLInputElement>) => {
		const { handleFunction, ...rest } = props;
		return <input {...rest} onClick={handleFunction} ref={ref} />;
	},
);

export default Input;
