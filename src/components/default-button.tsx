import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const DefaultButton = ({ text }: { text: string }) => {
	return (
		<button className="flex text-background px-8 py-3 text-base font-medium gap-2 items-center justify-center bg-gradient-to-r from-[#307BC4] to-[#274760] shadow-[0px_4px_20px_rgba(39,71,96,0.17)] rounded-[24px]">
			{text}
			<ArrowRight className="w-4 h-4 text-background" />
		</button>
	);
};

export default DefaultButton;
