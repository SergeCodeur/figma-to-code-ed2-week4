import AboutUs from "@/components/Home/sections/AboutUs";
import Departments from "@/components/Home/sections/Departments";
import HeroSection from "@/components/Home/sections/HeroSection";
import OurValues from "@/components/Home/sections/OurValues";
import ReviewsSection from "@/components/Home/sections/Reviews";
import NavBar from "@/components/Navigation/NavBar";

export default function Home() {
	return (
		<main>
			<NavBar />
			<HeroSection />
			<OurValues />
			<AboutUs />
			<Departments />
			<ReviewsSection />
		</main>
	);
}
