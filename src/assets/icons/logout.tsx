import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const Logout = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#274760"
				strokeWidth={1.5}
				d="M17.917 10c0-3.732 0-5.598-1.16-6.757-1.16-1.16-3.025-1.16-6.757-1.16-3.732 0-5.598 0-6.757 1.16-1.16 1.159-1.16 3.025-1.16 6.757 0 3.732 0 5.598 1.16 6.757 1.16 1.16 3.025 1.16 6.757 1.16 3.732 0 5.598 0 6.757-1.16 1.16-1.16 1.16-3.025 1.16-6.757Z"
			/>
			<path
				stroke="#274760"
				strokeLinecap="round"
				strokeWidth={1.5}
				d="M14.136 10.023H8.323m0 0c0 .475 1.796 2.073 1.796 2.073m-1.796-2.073c0-.488 1.796-2.054 1.796-2.054M5.803 6.663v6.666"
			/>
		</IconBase>
	);
};

export default Logout;
