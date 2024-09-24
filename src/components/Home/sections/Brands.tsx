import { brandImage } from "@/constants/Brands";
import Image from "next/image";
const Brands = () => {
	return (
		<div className="container my-20 grid md:grid-cols-4 grid-cols-2 gap-8 items-center">
			{brandImage.map((item, index) => (
				<Image
					src={item.scr}
					alt="logo"
					key={index}
					width={234}
					height={109.36}
				/>
			))}
		</div>
	);
};

export default Brands;
