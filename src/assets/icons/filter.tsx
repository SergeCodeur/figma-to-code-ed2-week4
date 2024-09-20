import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Filter = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#274760"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.25}
				d="M7.381 10.422C5.308 8.872 3.83 7.166 3.023 6.207c-.25-.297-.332-.514-.381-.896-.169-1.31-.253-1.965.131-2.388C3.157 2.5 3.837 2.5 5.195 2.5h9.61c1.358 0 2.038 0 2.422.423.384.423.3 1.078.131 2.388-.05.382-.131.6-.38.896-.809.96-2.29 2.669-4.368 4.22a.875.875 0 0 0-.334.624c-.206 2.276-.396 3.522-.514 4.152-.19 1.018-1.634 1.63-2.407 2.177-.46.326-1.018-.062-1.078-.565-.113-.96-.327-2.91-.56-5.764a.874.874 0 0 0-.336-.63Z"
			/>
		</IconBase>
	);
};

export default Filter;
