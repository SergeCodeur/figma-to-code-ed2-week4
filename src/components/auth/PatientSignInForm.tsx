"use client";

import useLogin from "@/app/(patient-auth)/sign-in/userLogin";
import { logInForm } from "@/app/(patient-auth)/utils/data";
import { Arrow } from "@/assets/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const SignInForm = () => {
	const [animate, setAnimate] = useState(false);
	const { formData, errors, handleLogin, handleChange } = useLogin();
	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<form
			className={`flex flex-col space-y-4 w-full ${
				animate ? "move-in-left" : "opacity-0"
			}`}
			onSubmit={handleLogin}
		>
			{logInForm.map(({ name, label, placeholder }) => (
				<div className="flex flex-col space-y-2" key={name}>
					<label className="ml-2 text-[#414870] text-xs md:text-sm">
						{label}
					</label>
					<Input
						type={name === "email" ? "email" : "password"}
						name={name}
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
			<div className="flex items-center justify-between space-x-3">
				<div className="flex items-center">
					<input
						id="remember-me"
						className="rounded-full"
						name="remember-me"
						type="checkbox"
					/>
					<label
						htmlFor="remember-me"
						className="ml-2 block text-xs md:text-sm text-foreground"
					>
						Remember me
					</label>
				</div>
				<div className="text-xs md:text-sm">
					<Link
						href="/recover-password"
						className="text-foreground ml-2 hover:font-extrabold"
					>
						Forgot your password?
					</Link>
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<Button variant="linear_color" className="w-[200px] !rounded-3xl">
					<span className="text-white">Log in</span>
					<Arrow />
				</Button>
				<span className="text-xs text-foreground">
					Don't have an account?
					<Link href="/sign-up" className="text-[#414870] ml-2 font-extrabold">
						Create an Account
					</Link>
				</span>
			</div>
		</form>
	);
};

export default SignInForm;
