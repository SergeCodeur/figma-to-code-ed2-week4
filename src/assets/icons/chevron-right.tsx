import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		height={12}
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="m14.8 6.462-4.772 4.5a.704.704 0 0 1-.48.18.703.703 0 0 1-.476-.187.625.625 0 0 1-.2-.45.624.624 0 0 1 .192-.452l3.608-3.402H.682A.703.703 0 0 1 .2 6.462a.625.625 0 0 1-.2-.454c0-.17.072-.334.2-.455a.703.703 0 0 1 .482-.188h11.99L9.064 1.962a.613.613 0 0 1-.008-.917.718.718 0 0 1 .973.008l4.771 4.5c.128.12.2.284.2.455 0 .17-.072.334-.2.454Z"
		/>
	</svg>
);
export default ChevronRight;
