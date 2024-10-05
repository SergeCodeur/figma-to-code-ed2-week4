"use client";
import useRegister from "@/app/(patient-auth)/sign-up/userRegister";
import { registerForm } from "@/app/(patient-auth)/utils/data";
import Arrow from "@/assets/icons/arrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUpForm = () => {
	const [animate, setAnimate] = useState(false);
	const { formData, errors, handleChange, handleSubmit } = useRegister();

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
			onSubmit={handleSubmit}
		>
			{registerForm.map(({ name, label, placeholder }) => (
				<div className="flex flex-col space-y-2" key={name}>
					<label className="ml-2 text-[#414870] text-xs md:text-sm">
						{label}
					</label>
					<Input
						type={
							name === "email"
								? "email"
								: name === "password"
								? "password"
								: "text"
						}
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

			<div className="flex flex-col space-y-2">
				<Button
					variant="linear_color"
					className="w-[200px] !rounded-3xl"
					type="submit"
				>
					Register
					<Arrow />
				</Button>
				<span className="text-xs text-foreground">
					Already have an account ?
					<Link href="/sign-in" className="text-[#414870] ml-2 font-extrabold">
						Log In
					</Link>
				</span>
			</div>
		</form>
	);
};

export default SignUpForm;
