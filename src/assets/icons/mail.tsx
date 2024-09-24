import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Mail = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#fff"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m2.15 3.5 4.032 2.285c1.486.842 2.115.842 3.601 0L13.816 3.5"
			/>
			<path
				stroke="#fff"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M2.158 7.86c.038 1.789.058 2.683.717 3.346.66.662 1.579.685 3.415.731 1.132.028 2.253.028 3.385 0 1.836-.046 2.755-.07 3.415-.731.66-.663.678-1.557.717-3.345.012-.575.012-1.147 0-1.722-.039-1.788-.058-2.682-.717-3.344-.66-.663-1.579-.686-3.415-.732a67.136 67.136 0 0 0-3.385 0c-1.836.046-2.755.07-3.415.732-.66.662-.679 1.556-.717 3.344a40.294 40.294 0 0 0 0 1.722Z"
			/>
		</IconBase>
	);
};

export default Mail;
