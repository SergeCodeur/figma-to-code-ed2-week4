import { SVGProps } from "react";
const Facebook = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={7}
		height={12}
		fill="none"
		{...props}
	>
		<path
			fill="#307BC4"
			d="m6.038 6.75.334-2.172H4.287V3.17c0-.594.291-1.173 1.225-1.173h.947V.146S5.6 0 4.777 0C3.06 0 1.938 1.04 1.938 2.923v1.655H.03V6.75h1.908V12h2.349V6.75h1.751Z"
		/>
	</svg>
);
export default Facebook;
