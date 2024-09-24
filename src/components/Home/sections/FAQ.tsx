import FAQCard from "@/components/ui/Accordion";
import Title from "@/components/ui/Title";
const FAQ = () => {
	return (
		<div className="lg:my-24 mt-14 space-y-10 container">
			<div className="flex items-center justify-center flex-col md:gap-3">
				<h2 className="text-base lg:text-2xl font-semibold uppercase text-sky-500">
					What people
				</h2>
				<Title>Usually asked</Title>
			</div>
			<div className="flex flex-col gap-4">
				<FAQCard />
			</div>
		</div>
	);
};

export default FAQ;
