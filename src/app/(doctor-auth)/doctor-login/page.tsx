"use client";
import Input from "@/app/(patient-auth)/ui/Input";
import { logInForm } from "@/app/(patient-auth)/utils/data";
import Arrow from "@/assets/icons/arrow";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
// import useRegister from "./userRegister";

const Login = () => {
	// const { formData, errors, handleChange, handleSubmit } = useRegister();

	const router = useRouter();
	return (
		<div className="flex flex-col justify-center items-center space-y-10 max-w-[474px] mx-auto">
			<div className="flex flex-col space-y-3 ">
				<h1 className="font-bold text-3xl text-foreground">Doctor Login</h1>
				<p className="text-base text-foreground">
					Welcome back! Enter your email and password to access your account.
				</p>
			</div>
			<form
				className={`flex flex-col space-y-4 w-full`}
				// onSubmit={handleSubmit}
			>
				{logInForm.map(({ name, label, placeholder }) => (
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
							router.push("/dashboard-doctor/patient-list");
						}}
					>
						<span className="text-white text-base">Login</span>
						<Arrow />
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
