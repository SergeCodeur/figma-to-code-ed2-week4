import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const OutlineCircle = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
			/>
		</IconBase>
	);
};

export default OutlineCircle;
