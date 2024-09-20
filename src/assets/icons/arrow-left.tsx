import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const ArrowLeft = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#274760"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M15 6s-6 4.419-6 6c0 1.581 6 6 6 6"
			/>
		</IconBase>
	);
};

export default ArrowLeft;
