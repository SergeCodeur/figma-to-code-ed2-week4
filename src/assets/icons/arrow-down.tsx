import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const ArrowDown = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={0.5}
				strokeWidth={1.5}
				d="M15.5 7.5s-3.682 5-5 5-5-5-5-5"
			/>
		</IconBase>
	);
};

export default ArrowDown;
