import { ChevronDown } from "@/assets/icons";
import { useRef, useState } from "react";

interface AccordionItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	question,
	answer,
	isOpen,
	onClick,
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<string | number>(0);
	const handleToggle = () => {
		onClick();
		if (contentRef.current) {
			setHeight(isOpen ? 0 : contentRef.current.scrollHeight);
		}
	};
	return (
		<div className="border rounded-[20px] overflow-hidden border-blue">
			<button
				className={`${
					isOpen ? "bg-gradient-to-r from-[#D2EAEF] to-[#86BBF1]" : ""
				} flex justify-between items-center w-full p-4 text-sm sm:text-base md:text-xl text-left bg-white transition-colors`}
				onClick={handleToggle}
			>
				<h4 className="font-medium text-gray-800">{question}</h4>
				<span className="min-w-7 min-h-7">
					<ChevronDown
						className={`transition-transform ${
							isOpen ? "transform rotate-180" : ""
						}`}
					/>
				</span>
			</button>
			<div
				ref={contentRef}
				style={{ maxHeight: isOpen ? height : 0 }}
				className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
			>
				<div className="p-4 bg-blue-50 text-gray-700">
					<p className="text-xs sm:text-sm md:text-base">{answer}</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
