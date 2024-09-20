import AboutUs from "@/components/Home/about-us";
import Departments from "@/components/Home/departments";
import HeroSection from "@/components/Home/hero-section";
import OurValues from "@/components/Home/our-values";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<OurValues />
			<AboutUs />
			<Departments />
		</main>
	);
}
