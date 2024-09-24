import AboutUs from "@/components/Home/sections/AboutUs";
import Brands from "@/components/Home/sections/Brands";
import CTA from "@/components/Home/sections/CTA";
import Departments from "@/components/Home/sections/Departments";
import FAQ from "@/components/Home/sections/FAQ";
import Footer from "@/components/Home/sections/Footer";
import HeroSection from "@/components/Home/sections/HeroSection";
import NavBar from "@/components/Home/sections/Navbar";
import OurValues from "@/components/Home/sections/OurValues";
import ReviewsSection from "@/components/Home/sections/Reviews";

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
