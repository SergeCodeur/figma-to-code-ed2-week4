import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={28}
		height={29}
		fill="none"
		{...props}
	>
		<path
			fill="#307BC4"
			d="M28 14.44c0-7.72-6.28-14-14-14s-14 6.28-14 14 6.28 14 14 14 14-6.28 14-14Zm-26.25 0C1.75 7.686 7.245 2.19 14 2.19s12.25 5.496 12.25 12.25c0 6.755-5.495 12.25-12.25 12.25S1.75 21.195 1.75 14.44Zm12.869 5.87a.874.874 0 0 1-1.238 0l-4.375-4.376a.872.872 0 0 1 0-1.237.874.874 0 0 1 1.238 0l2.881 2.881V9.19a.875.875 0 1 1 1.75 0v8.388l2.881-2.881a.874.874 0 1 1 1.238 1.237l-4.375 4.375Z"
		/>
	</svg>
);
export default ChevronDown;
