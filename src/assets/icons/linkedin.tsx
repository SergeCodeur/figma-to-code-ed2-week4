import { SVGProps } from "react";
const Linkedin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={11}
		height={11}
		fill="none"
		{...props}
	>
		<path
			fill="#307BC4"
			d="M2.344 10.5H.167V3.49h2.177v7.01Zm-1.09-7.967A1.271 1.271 0 0 1 .363.37a1.261 1.261 0 0 1 2.153.892c0 .696-.565 1.272-1.262 1.272Zm9.24 7.967H8.321V7.087c0-.813-.016-1.856-1.132-1.856-1.132 0-1.305.884-1.305 1.798v3.47H3.708V3.49h2.089v.957h.03c.291-.55 1.001-1.132 2.06-1.132 2.204 0 2.61 1.45 2.61 3.335v3.85h-.003Z"
		/>
	</svg>
);
export default Linkedin;
