import TestimonialsCard from "@/components/Home/cards/TestimonialsCard";
import Title from "@/components/ui/Title";
import { Testimonials } from "@/constants/Testimonials";
import Image from "next/image";

const ReviewsSection = () => {
	return (
		<div className="mt-20 container w-full flex flex-col gap-10 items-center justify-center">
			<div className="w-full flex items-center justify-center flex-col gap-1">
				<Title>Some Reviews</Title>
				<h3 className="text-lg lg:text-2xl font-semibold uppercase text-sky-500">
					of our clients
				</h3>
			</div>
			<div className="w-full flex items-center p-0 lg:p-14 justify-center gap-7 flex-col lg:flex-row">
				<div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 border-r border-sky-500">
					{Testimonials.map((val, i) => (
						<TestimonialsCard key={i} {...val} />
					))}
				</div>
				<div className="flex flex-col gap-3 w-full lg:w-1/2">
					<Image src={"/icons/quote.svg"} alt="Quote" height={50} width={50} />
					<div className="flex items-start gap-2 flex-col ml-14">
						<p className="font-normal text-sm sm:text-base text-slate-400">
							The pediatrician was great with him and made him feel at ease, and
							the entire staff was kind and attentive. I recently had to bring
							my child to ProHealth for a minor injury, and I was so impressed
							with the care he received.
						</p>
						<Image
							src={"/icons/rating.svg"}
							alt="Quote"
							height={16}
							width={90}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewsSection;
