"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Arrow from "../ui/arrow";
import Button from "../ui/button";
import Input from "../ui/input";

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
				<span className="font-extrabold text-3xl text-primary-900">
					Forgot Password
				</span>
				<span className="text-base text-primary-900">
					Enter your email to reset your password.
				</span>
			</div>
			<div
				className={`flex flex-col space-y-4 w-full  ${
					isVisible ? "fall-in" : "fall-in-init"
				}`}
			>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-primary-100 text-sm">Email</label>

					<Input
						className="input-block"
						placeholder="john@gmail.com"
						type="email"
					/>
				</div>

				<div className="flex space-x-2">
					<Button
						className="py-2 text-center bg-gradient-to-r from-primary-400
				 to-primary-900 rounded-full w-full"
					>
						<span className="text-white text-base">Submit</span>
					</Button>
					<Link href="/auth/sign-in" className="text-white text-base w-full">
						<Button
							className="py-2 text-center bg-gradient-to-r from-gray-500
				 to-gray-800 rounded-full w-full"
						>
							Cancel
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecoverPassword;
