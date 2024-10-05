import { useRouter } from "next/navigation";
import { useState } from "react";

const doctor = {
	id: "1",
	firstName: "Frank",
	lastName: "Fill",
	email: "doctor@example.com",
	password: "hashed_password",
};

const useDoctorLogin = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
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
			setError("Invalid email or password");
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
