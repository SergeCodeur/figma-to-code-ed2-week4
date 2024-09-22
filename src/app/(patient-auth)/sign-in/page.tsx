"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Arrow from "../ui/arrow";
import Input from "../ui/input";
import { logInForm } from "../utils/data";
// import useLogin from "./userLogin";

const SignIn = () => {
	const [animate, setAnimate] = useState(false);
	const router = useRouter();
	// const { formData, errors, handleLogin, handleChange } = useLogin();
	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<h2 className="font-bold text-3xl text-foreground">Log In</h2>
				<p className="text-base text-foreground">
					Welcome back! Enter your email and password to access your account.
				</p>
			</div>
			<form
				className={`flex flex-col space-y-4 w-full ${
					animate ? "move-in-left" : "opacity-0"
				}`}
				// onSubmit={handleLogin}
			>
				{logInForm.map(({ name, label, placeholder }) => (
					<div className="flex flex-col space-y-2" key={name}>
						<label className="ml-2 text-[#414870] text-sm">{label}</label>
						<Input
							type={name === "email" ? "email" : "password"}
							name={name}
							className="w-full px-3 py-2 border border-blue/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							// value={formData[name as keyof typeof formData]}
							// onChange={handleChange}
							placeholder={placeholder}
							required
						/>
						{/* {errors[name as keyof typeof formData] && (
							<span className="text-sm text-red-500">
								{errors[name as keyof typeof formData]}
							</span>
						)} */}
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
						variant="linear_color"
						className="w-[200px] !rounded-3xl"
						onClick={() => {
							router.push("/dashboard-patient");
						}}
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
