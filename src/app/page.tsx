import NavBar from "@/components/home/navigation/NavBar";
import AboutUs from "@/components/home/sections/AboutUs";
import Brands from "@/components/home/sections/Brands";
import CTA from "@/components/home/sections/CTA";
import Departments from "@/components/home/sections/Departments";
import FAQ from "@/components/home/sections/FAQ";
import Footer from "@/components/home/sections/Footer";
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
			<FAQ />
			<Brands />
			<Footer />
		</main>
	);
}
