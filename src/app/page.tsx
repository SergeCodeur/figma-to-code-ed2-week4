import AboutUs from "@/components/Home/sections/AboutUs";
import Departments from "@/components/Home/sections/Departments";
import HeroSection from "@/components/Home/sections/HeroSection";
import OurValues from "@/components/Home/sections/OurValues";
import ReviewsSection from "@/components/Home/sections/Reviews";
import NavBar from "@/components/Navigation/NavBar";
import CTA from "@/components/Home/sections/CTA";
import FAQ from "@/components/Home/sections/FAQ";
import Brands from "@/components/Home/sections/Brands";
import Footer from "@/components/Navigation/Footer";

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
			<FAQ />
			<Brands />
			<Footer />
		</main>
	);
}
