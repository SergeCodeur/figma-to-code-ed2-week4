"use client";
import { logInForm } from "@/app/(patient-auth)/utils/data";
import Arrow from "@/assets/icons/arrow";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useDoctorLogin from "@/hooks/useDoctorLogin";

const DoctorSignInForm = () => {
	const { formData, error, handleChange, handleSubmit } = useDoctorLogin();

	return (
		<form className={`flex flex-col space-y-4 w-full`} onSubmit={handleSubmit}>
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
					{error && <span className="text-sm text-red-500">{error}</span>}
				</div>
			))}

			<div className="flex flex-col space-y-2">
				<Button
					variant="linear_color"
					className="w-[200px] !rounded-3xl"
					type="submit"
				>
					<span className="text-white">Log in</span>
					<Arrow />
				</Button>
			</div>
		</form>
	);
};

export default DoctorSignInForm;
