import { FormData } from "@/app/(patient-auth)/utils/interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

const doctor = {
	id: "1", 
	firstName: "Frank",
	lastName: "Fill",
	email: "doctor@example.com",
	password: "hashed_password",
};
type Login = Pick<FormData, "email" | "password">;

const useDoctorLogin = () => {
	const [formData, setFormData] = useState<Login>({ email: "", password: "" });
	const [error, setError] = useState<Partial<Login>>({});
	const router = useRouter();
	const validationRules: {
		[key in keyof Login]: (value: string) => string | undefined;
	} = {
		email: value =>
			!/\S+@\S+\.\S+/.test(value) ? "Email is not valid" : undefined,
		password: value =>
			value.length < 6
				? "Password must be be at least 6 characters"
				: undefined,
	};
	const validateField = (
		name: keyof Login,
		value: string,
	): string | undefined => {
		return validationRules[name](value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));

		const error = validateField(name as keyof Login, value);
		setError(prevError => ({ ...prevError, [name]: error }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			formData.email === doctor.email &&
			formData.password === doctor.password
		) {
			localStorage.setItem("doctor", JSON.stringify(doctor));

			document.cookie = `doctorId=${doctor.id}; path=/; max-age=${
				60 * 60 * 24 * 7
			}`;
			router.push("/dashboard-doctor/patient-list");
		} else {
			alert("Invalid email or password");
		}
	};

	return {
		formData,
		error,
		handleChange,
		handleSubmit,
	};
};

export default useDoctorLogin;
