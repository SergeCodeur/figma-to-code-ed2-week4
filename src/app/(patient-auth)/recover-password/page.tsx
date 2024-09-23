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
				<span className="font-extrabold text-3xl text-foreground">
					Forgot Password
				</span>
				<span className="text-base text-foreground">
					Enter your email to reset your password.
				</span>
			</div>
			<div
				className={`flex flex-col space-y-4 w-full p-2 ${
					isVisible ? "fall-in" : "fall-in-init"
				}`}
			>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-[#414870] text-sm">Email</label>

					<Input
						className="w-full px-3 py-2 border border-blue/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="john@gmail.com"
						type="email"
					/>
				</div>

				<div className="flex space-x-2 items-center">
					<Button variant="linear_color" className="w-full">
						<span className="text-white text-base">Submit</span>
					</Button>
					<Link href="/sign-in" className="text-white text-base w-full">
						<Button variant="default" className="w-full h-11">
							Cancel
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecoverPassword;
