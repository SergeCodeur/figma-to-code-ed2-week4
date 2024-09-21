import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Search = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={0.5}
				strokeWidth={1.5}
				d="m14.584 14.583 3.75 3.75"
			/>
			<path
				stroke="currentColor"
				strokeLinejoin="round"
				strokeOpacity={0.5}
				strokeWidth={1.5}
				d="M16.666 9.167a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z"
			/>
		</IconBase>
	);
};

export default Search;
