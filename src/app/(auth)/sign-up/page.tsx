"use client";
import React, { useEffect, useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Arrow from "../ui/arrow";
import Link from "next/link";
import useRegister from "./userRegister";
import { registerForm } from "../utils/data";

const SignUp = () => {
	const [animate, setAnimate] = useState(false);
	const { formData, errors, handleChange, handleSubmit } = useRegister();

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<span className="font-extrabold text-3xl text-foreground">
					Register
				</span>
				<span className="text-base text-foreground">
					Join our healthcare community to access personalized services and book
					appointments.
				</span>
			</div>
			<form
				className={`flex flex-col space-y-4 w-full ${
					animate ? "move-in-left" : "opacity-0"
				}`}
				onSubmit={handleSubmit}
			>
				{registerForm.map(({ name, label, placeholder }) => (
					<div className="flex flex-col space-y-2" key={name}>
						<label className="ml-2 text-[#414870] text-sm">{label}</label>
						<Input
							type={
								name === "email"
									? "email"
									: name === "password"
									? "password"
									: "text"
							}
							name={name}
							className="input-block"
							value={formData[name as keyof typeof formData]}
							onChange={handleChange}
							placeholder={placeholder}
							required
						/>
						{errors[name as keyof typeof formData] && (
							<span className="text-sm text-red-500">
								{errors[name as keyof typeof formData]}
							</span>
						)}
					</div>
				))}

				<div className="flex flex-col space-y-2">
					<Button
						className="flex py-2 text-center bg-gradient-to-r from-bleu
				 to-foreground rounded-full w-2/5 justify-center items-center space-x-2"
						type="submit"
					>
						<span className="text-white text-base">Register</span>
						<Arrow />
					</Button>
					<span className="text-xs text-foreground">
						Already have an account ?
						<Link
							href="/auth/sign-in"
							className="text-[#414870] ml-2 font-extrabold"
						>
							Log In
						</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
