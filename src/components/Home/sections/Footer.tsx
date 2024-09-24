import { ChevronRight, Facebook, Instagram, Linkedin } from "@/assets/icons";
import Button from "@/components/ui/Button";
import { footerLinksOne, footerLinksTwo } from "@/constants/FooterLinks";
import Image from "next/image";
import FooterContactInfo from "../FooterContactInfo";
import FooterLink from "../FooterLink";

const Footer = () => {
	return (
		<footer className="w-full mt-32 bg-gradient-blue-green pt-7 space-y-7">
			<div className="flex justify-between flex-wrap gap-y-5 lg:gap-10 min-h-80 container">
				<div className=" space-y-7 max-lg:min-w-72">
					<Image
						src="/images/logo_dark.svg"
						alt="logo"
						width={70}
						height={72}
					/>
					<FooterContactInfo />
				</div>
				<ul className="flex flex-col gap-5 max-lg:min-w-72">
					{footerLinksOne.map((link, index) => (
						<FooterLink link={link.path} title={link.title} key={index} />
					))}
				</ul>
				<ul className="flex flex-col gap-5 max-lg:min-w-72">
					{footerLinksTwo.map((link, index) => (
						<FooterLink link={link.path} title={link.title} key={index} />
					))}
				</ul>
				<div className="max-w-[355px] space-y-6 lg:space-y-12 max-lg:min-w-72">
					<div>
						<h2 className="text-xl lg:text-3xl font-bold">
							Be Our Subscribers
						</h2>
						<p className="text-xs md:text-sm lg:text-base">
							To get the latest news about health from our experts
						</p>
					</div>
					<form className="rounded-full flex justify-between items-center overflow-hidden border border-blue/50">
						<input
							type="email"
							placeholder="example@email.com"
							className="bg-transparent outline-none h-full w-full px-3 text-xs md:text-sm lg:text-base text-dark-blue/50 placeholder:text-dark-blue/50"
						/>
						<Button
							variant="linear_color"
							className="!rounded-full"
							type="submit"
						>
							Submit <ChevronRight />
						</Button>
					</form>
				</div>
			</div>
			<div className="bg-blue w-full">
				<div className="h-20 container flex justify-between flex-wrap items-center">
					<div className="flex gap-3 md:gap-7">
						<h3 className="text-sm text-white">Follow us</h3>
						<ul className="flex gap-2 md:gap-5">
							<li className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
								<Facebook />
							</li>
							<li className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
								<Linkedin />
							</li>
							<li className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
								<Instagram />
							</li>
						</ul>
					</div>
					<p className="text-xs md:text-sm text-white">
						Copyright © 2024 All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
