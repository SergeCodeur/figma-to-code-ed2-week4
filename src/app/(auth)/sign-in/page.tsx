"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Arrow from "../ui/arrow";
import Button from "../ui/button";
import Input from "../ui/input";
import useLogin from "./userLogin";
import { logInForm } from "../utils/data";

const SignIn = () => {
	const [animate, setAnimate] = useState(false);
	const { formData, errors, handleLogin, handleChange } = useLogin();
	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<span className="font-extrabold text-3xl text-foreground">Log In</span>
				<span className="text-base text-foreground">
					Welcome back! Enter your email and password to access your account.
				</span>
			</div>
			<form
				className={`flex flex-col space-y-4 w-full ${
					animate ? "move-in-left" : "opacity-0"
				}`}
				onSubmit={handleLogin}
			>
				{logInForm.map(({ name, label, placeholder }) => (
					<div className="flex flex-col space-y-2" key={name}>
						<label className="ml-2 text-[#414870] text-sm">{label}</label>
						<Input
							type={name === "email" ? "email" : "password"}
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
							className="ml-2 block text-sm text-foreground"
						>
							Remember me
						</label>
					</div>
					<div className="text-sm">
						<Link
							href="/recover-password"
							className="text-foreground ml-2 hover:font-extrabold"
						>
							Forgot your password?
						</Link>
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					<Button
						className="flex py-2 text-center bg-gradient-to-r from-bleu
				 to-foreground rounded-full w-2/5 justify-center items-center space-x-2"
					>
						<span className="text-white text-base">Log in</span>
						<Arrow />
					</Button>
					<span className="text-xs text-foreground">
						Don't have an account?
						<Link
							href="/sign-up"
							className="text-[#414870] ml-2 font-extrabold"
						>
							Create an Account
						</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
