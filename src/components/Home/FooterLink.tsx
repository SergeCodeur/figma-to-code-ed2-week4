import Link from "next/link";

const FooterLink = ({ link, title }: { link: string; title: string }) => {
	return (
		<Link href={link} className="text-xs sm:text-sm md:text-base">
			{title}
		</Link>
	);
};

export default FooterLink;
