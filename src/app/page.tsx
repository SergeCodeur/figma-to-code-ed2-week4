import NavBar from "@/components/home/Navigation/NavBar";
import AboutUs from "@/components/home/sections/AboutUs";
import CTA from "@/components/home/sections/CTA";
import Departments from "@/components/home/sections/Departments";
import HeroSection from "@/components/home/sections/HeroSection";
import OurValues from "@/components/home/sections/OurValues";
import ReviewsSection from "@/components/home/sections/Reviews";

export default function Home() {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<OurValues />
			<AboutUs />
			<Departments />
			<ReviewsSection />
			<CTA />
		</main>
	);
}
