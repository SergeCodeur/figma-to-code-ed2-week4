// interface Item {
// 	src: string;
// 	label: string;
// 	text: string;
// }

import Image from "next/image";
import Button from "../../ui/Button";
import ContactInfo from "../ContactInfo";

const HeroSection = () => {
	// //
	// const items: Item[] = [
	// 	{
	// 		src: "/icons/hotline.svg",
	// 		label: "Hotline",
	// 		text: "123-456-7890",
	// 	},
	// 	{
	// 		src: "/icons/ambulance.svg",
	// 		label: "Ambulance",
	// 		text: "876-256-876",
	// 	},
	// 	{
	// 		src: "/icons/location_2.svg",
	// 		label: "Location",
	// 		text: "New York, US",
	// 	},
	// ];
	//
	return (
		<div className="relative">
			<div className="relative h-[600px] container bg-hero-bg bg-cover bg-center">
				<div className="absolute left-0 top-2/4 -translate-y-2/4 max-w-[670px] w-full pl-[73px] space-y-10">
					<div className="space-y-7">
						<h1 className="text-5xl font-bold leading-[58px]">
							Your Partner in Health and Wellness
						</h1>
						<p className="text-xl">
							We are committed to providing you with the best medical and
							healthcare services to help you live healthier and happier.
						</p>
					</div>
					<Button variant="ghost" className="px-0">
						<svg
							width="50"
							height="51"
							viewBox="0 0 50 51"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_1_27)">
								<path
									d="M42.739 7.64078C32.8938 -2.10809 17.0097 -2.03005 7.26088 7.81515C-2.42029 17.592 -2.42029 33.3422 7.26088 43.1191C17.1061 52.8679 32.9902 52.7899 42.739 42.9447C52.4202 33.1679 52.4202 17.4176 42.739 7.64078ZM25 48.4512C12.2783 48.4512 1.92868 38.1016 1.92868 25.3799C1.92868 12.6581 12.2782 2.30869 25 2.30869C37.7217 2.30869 48.0712 12.6583 48.0712 25.38C48.0712 38.1017 37.7216 48.4512 25 48.4512Z"
									fill="#274760"
								/>
								<path
									d="M38.5997 24.5064V24.5076L18.2309 12.7479C17.7488 12.4696 17.1323 12.6347 16.854 13.1169C16.7656 13.27 16.719 13.4436 16.719 13.6204V37.1397C16.7192 37.6963 17.1708 38.1475 17.7274 38.1471C17.9042 38.147 18.0779 38.1005 18.231 38.0121L38.5998 26.2524C39.082 25.9742 39.2472 25.3577 38.969 24.8755C38.8804 24.7222 38.7531 24.5949 38.5997 24.5064Z"
									fill="#274760"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_27">
									<rect
										width="50"
										height="50"
										fill="white"
										transform="translate(0 0.379883)"
									/>
								</clipPath>
							</defs>
						</svg>
						See how we work
					</Button>
				</div>
				<Image
					src="/images/hero_img.png"
					alt=""
					width={688.15}
					height={600}
					className="object-cover absolute right-0 bottom-0"
				/>
				<div className="absolute left-2/4 -translate-x-2/4 -bottom-[91px] w-full max-w-[1296px]">
					<ContactInfo />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
