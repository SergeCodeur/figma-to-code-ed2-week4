import IconBase from "@/components/ui/IconBase";
import { IconProps } from "@/types";

const DownloadSquare = (props: IconProps) => {
	return (
		<IconBase {...props}>
			<path
				stroke="#274760"
				strokeWidth={1.5}
				d="M2.083 10c0-3.732 0-5.598 1.16-6.757 1.16-1.16 3.025-1.16 6.757-1.16 3.732 0 5.598 0 6.758 1.16 1.159 1.16 1.159 3.025 1.159 6.757 0 3.732 0 5.598-1.16 6.757-1.159 1.16-3.025 1.16-6.757 1.16-3.732 0-5.598 0-6.757-1.16-1.16-1.16-1.16-3.025-1.16-6.757Z"
			/>
			<path
				stroke="#274760"
				strokeLinecap="round"
				strokeWidth={1.5}
				d="M10.002 5.865v5.876m0 0c.272.003.54-.183.738-.411l1.324-1.486m-2.062 1.897c-.262-.004-.528-.19-.738-.411L7.933 9.844M6.655 14.2h6.667"
			/>
		</IconBase>
	);
};

export default DownloadSquare;
