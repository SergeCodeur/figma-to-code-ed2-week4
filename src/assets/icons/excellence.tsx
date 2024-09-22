import { SVGProps } from "react";
const Exellence = (props: SVGProps<SVGSVGElement>) => (
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
			d="M7.612 18.749a8.574 8.574 0 0 1-.737-3.493c0-4.63 3.638-8.382 8.125-8.382s8.125 3.753 8.125 8.382c0 1.247-.264 2.43-.737 3.493"
		/>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M15 2.499v1.25M27.5 14.999h-1.25M3.75 14.999H2.5M23.838 6.16l-.884.884M7.046 7.045l-.884-.884M18.146 24.132c1.263-.409 1.77-1.565 1.912-2.727.043-.348-.243-.636-.593-.636h-8.869a.604.604 0 0 0-.61.667c.14 1.16.492 2.008 1.83 2.696m6.33 0h-6.33m6.33 0c-.152 2.431-.854 3.394-3.138 3.367-2.442.045-3.004-1.145-3.191-3.367"
		/>
	</svg>
);
export default Exellence;
