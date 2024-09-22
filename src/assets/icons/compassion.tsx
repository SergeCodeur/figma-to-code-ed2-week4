import { SVGProps } from "react";
const Compassion = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={30}
		height={30}
		fill="none"
		{...props}
	>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M10.495 3.19c1.843-1.142 3.452-.682 4.419.051.396.3.594.451.711.451.117 0 .315-.15.711-.45.967-.734 2.576-1.194 4.42-.052 2.42 1.499 2.967 6.445-2.614 10.617-1.063.795-1.595 1.192-2.517 1.192-.922 0-1.454-.397-2.517-1.192C7.528 9.635 8.075 4.69 10.494 3.19Z"
		/>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M5 17.5h2.994c.367 0 .73.083 1.059.242l2.552 1.235c.33.16.692.242 1.06.242h1.303c1.26 0 2.282.989 2.282 2.208a.11.11 0 0 1-.083.107l-3.176.878a2.44 2.44 0 0 1-1.71-.154l-2.728-1.32"
		/>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m16.25 20.625 5.741-1.764c1.018-.317 2.118.059 2.755.942.461.638.274 1.552-.398 1.94l-9.394 5.42a2.493 2.493 0 0 1-1.96.234L5 25.025"
		/>
	</svg>
);
export default Compassion;
