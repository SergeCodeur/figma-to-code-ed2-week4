import Title from "@/components/ui/Title";
import Image from "next/image";

const AboutUs = () => {
	return (
		<section className="mt-28 lg:mb-64 container flex justify-between max-lg:flex-col-reverse gap-y-36 lg:gap-y-9 relative">
			<div className="relative flex lg:justify-start justify-center">
				<Image
					src={"/images/men-take-appointment.png"}
					alt="Men take appointment"
					className="object-cover rounded-2xl"
					width={520}
					height={483}
				/>
				<Image
					className="absolute -top-20 lg:-top-16 right-2/4 translate-x-2/4 lg:-right-16 object-cover"
					src={"/images/about-us-top.webp"}
					alt="About Us"
					height={128}
					width={146}
				/>
				<Image
					src={"/images/about-us-bottom.webp"}
					alt="About Us"
					height={352}
					width={320}
					className="max-lg:hidden absolute -bottom-1/3 -right-1/3 -translate-x-4"
				/>
			</div>
			<div className="w-full max-w-xl max-lg:mx-auto max-lg:mt-8 space-y-8 lg:space-y-20">
				<div className="w-full flex flex-col items-center lg:items-start gap-1">
					<Title>About Us</Title>
					<h4 className="text-base lg:text-2xl font-semibold uppercase text-sky-500">
						PRO HEALTH
					</h4>
				</div>
				<div className="flex flex-col items-start gap-3 lg:gap-6">
					<div className="flex items-start gap-2">
						<span className="w-9 block">
							<svg
								width="35"
								height="25"
								viewBox="0 0 35 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M34.5342 13.5589L23.3977 24.0589C23.0977 24.3322 22.6958 24.4834 22.2787 24.4799C21.8615 24.4765 21.4625 24.3188 21.1675 24.0407C20.8726 23.7625 20.7053 23.3863 20.7016 22.993C20.698 22.5997 20.8584 22.2208 21.1482 21.9379L29.5689 13.9984H1.59092C1.16899 13.9984 0.764327 13.8404 0.465971 13.5591C0.167615 13.2778 0 12.8963 0 12.4984C0 12.1006 0.167615 11.7191 0.465971 11.4378C0.764327 11.1565 1.16899 10.9984 1.59092 10.9984H29.5689L21.1482 3.05891C20.9962 2.92054 20.875 2.75503 20.7916 2.57202C20.7083 2.38901 20.6644 2.19218 20.6625 1.99301C20.6607 1.79384 20.7009 1.59633 20.7809 1.41198C20.8609 1.22764 20.9791 1.06016 21.1284 0.919323C21.2778 0.778484 21.4554 0.667102 21.651 0.59168C21.8465 0.51626 22.056 0.478307 22.2672 0.480037C22.4785 0.481769 22.6872 0.523149 22.8813 0.601762C23.0754 0.680376 23.251 0.794647 23.3977 0.937914L34.5342 11.4379C34.8325 11.7192 35 12.1007 35 12.4984C35 12.8962 34.8325 13.2776 34.5342 13.5589Z"
									fill="#307BC4"
								/>
							</svg>
						</span>
						<div>
							<h5 className="font-normal md:text-2xl text-base text-dark-blue/50">
								ProHealth is a team of experienced medical professionals
							</h5>
							<p className="mt-6 font-normal text-sm md:text-base text-dark-blue/50">
								Dedicated to providing top-quality healthcare services. We
								believe in a holistic approach to healthcare that focuses on
								treating the whole person, not just the illness or symptoms.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Image
				src="/images/linear-gradiant-about-section.svg"
				alt="bg linear"
				width={1244}
				height={877}
				className="absolute right-0 top-1/4 lg:top-2/4 -translate-y-2/4 z-[-1]"
			/>
		</section>
	);
};

export default AboutUs;
