import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Clock = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="currentColor"
				strokeOpacity={0.5}
				strokeWidth={1.5}
				d="M10.5 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={0.5}
				strokeWidth={1.5}
				d="m8.417 7.917 2.917 2.916m2.5-4.166-4.167 4.166"
			/>
		</IconBase>
	);
};

export default Clock;
