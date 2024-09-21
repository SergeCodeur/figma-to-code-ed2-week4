import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const FilledCircle = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				fill="currentColor"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M5 9.167A4.167 4.167 0 1 0 5 .833a4.167 4.167 0 0 0 0 8.334Z"
			/>
		</IconBase>
	);
};

export default FilledCircle;
