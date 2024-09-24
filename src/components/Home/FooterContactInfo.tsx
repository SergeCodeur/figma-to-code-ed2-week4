import { footerContactInformation } from "@/constants/FooterLinks";
import Link from "next/link";

const FooterContactInfo = () => {
	return (
		<ul className="flex flex-col gap-3">
			{footerContactInformation.map((info, index) => (
				<li key={index}>
					<Link href="#" className="flex items-center gap-3">
						<span className="flex justify-center items-center bg-blue w-7 h-7 rounded-full">
							<info.icon width={15} height={15} />
						</span>
						<span className="text-xs md:text-base">{info.text}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterContactInfo;
