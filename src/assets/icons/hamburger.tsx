import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Hamburger = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.25}
				d="M3.333 4.167h13.334M3.333 10h13.334M3.333 15.833h13.334"
			/>
		</IconBase>
	);
};

export default Hamburger;
