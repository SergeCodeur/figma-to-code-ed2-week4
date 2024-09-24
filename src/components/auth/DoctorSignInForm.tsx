"use client";
import { logInForm } from "@/app/(patient-auth)/utils/data";
import Arrow from "@/assets/icons/arrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";
// import useRegister from "./userRegister";

const DoctorSignInForm = () => {
	// const { formData, errors, handleChange, handleSubmit } = useRegister();
	const router = useRouter();
	return (
		<form
			className={`flex flex-col space-y-4 w-full`}
			// onSubmit={handleSubmit}
		>
			{logInForm.map(({ name, label, placeholder }) => (
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
	);
};

export default DoctorSignInForm;
