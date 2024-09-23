"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Arrow from "../../../assets/icons/arrow";
import Input from "../ui/Input";
import { registerForm } from "../utils/data";
// import useRegister from "./userRegister";

const SignUp = () => {
	const [animate, setAnimate] = useState(false);
	// const { formData, errors, handleChange, handleSubmit } = useRegister();

	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<span className="font-bold text-3xl text-foreground">Register</span>
				<span className="text-base text-foreground">
					Join our healthcare community to access personalized services and book
					appointments.
				</span>
			</div>
			<form
				className={`flex flex-col space-y-4 w-full ${
					animate ? "move-in-left" : "opacity-0"
				}`}
				// onSubmit={handleSubmit}
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

				<div className="flex flex-col space-y-2">
					<Button
						variant="linear_color"
						className="w-[200px] !rounded-3xl"
						type="submit"
						onClick={() => {
							router.push("/sign-in");
						}}
					>
						<span className="text-white text-base">Register</span>
						<Arrow />
					</Button>
					<span className="text-xs text-foreground">
						Already have an account ?
						<Link
							href="/sign-in"
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
