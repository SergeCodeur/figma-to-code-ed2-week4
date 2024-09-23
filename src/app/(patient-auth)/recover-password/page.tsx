"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useEffect, useState } from "react";

const RecoverPassword = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center space-y-10 overflow-hidden">
			<div className="flex flex-col space-y-3 ">
				<h2 className="font-extrabold text-3xl text-foreground">
					Forgot Password
				</h2>
				<p className="text-sm lg:text-base text-foreground">
					Enter your email to reset your password.
				</p>
			</div>
			<div
				className={`flex flex-col space-y-4 w-full p-2 ${
					isVisible ? "fall-in" : "fall-in-init"
				}`}
			>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-[#414870] text-xs md:text-sm">
						Email
					</label>

					<Input placeholder="john@gmail.com" type="email" />
				</div>

				<div className="flex space-x-2 items-center">
					<Button variant="linear_color" className="w-full">
						Submit
					</Button>
					<Link
						href="/sign-in"
						className="text-white text-sm md:text-base w-full"
					>
						<Button variant="default" className="w-full h-10 md:h-11">
							Cancel
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecoverPassword;
