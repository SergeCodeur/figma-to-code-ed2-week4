import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const ArrowRight = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#274760"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M9 6s6 4.419 6 6c0 1.581-6 6-6 6"
			/>
		</IconBase>
	);
};

export default ArrowRight;
