// app/register/useRegister.ts
import { useRouter } from "next/navigation";
import { useState } from "react";
import { hashPassword } from "../utils/hash";
import { FormData } from "../utils/interface";

const useRegister = () => {
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState<Partial<FormData>>({});
	const router = useRouter();

	const validationRules: {
		[key in keyof FormData]: (value: string) => string | undefined;
	} = {
		firstName: value =>
			value.length < 2 ? "First name must be at least 2 characters" : undefined,
		lastName: value =>
			value.length < 2 ? "Last name must be at least 2 characters" : undefined,
		email: value =>
			!/\S+@\S+\.\S+/.test(value) ? "Email is not valid" : undefined,
		password: value =>
			value.length < 6
				? "Password must be be at least 6 characters"
				: undefined,
	};

	const validateField = (
		name: keyof FormData,
		value: string,
	): string | undefined => {
		return validationRules[name](value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));

		const error = validateField(name as keyof FormData, value);
		setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validationErrors: Partial<FormData> = {};

		for (const key in formData) {
			const error = validateField(
				key as keyof FormData,
				formData[key as keyof FormData],
			);
			if (error) {
				validationErrors[key as keyof FormData] = error;
			}
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			const hashedPassword = hashPassword(formData.password);
			const userId = Date.now().toString();
			const userData = { ...formData, id: userId, password: hashedPassword };
			localStorage.setItem("user", JSON.stringify(userData));

			document.cookie = `userId=${userId}; path=/; max-age=${60 * 60 * 24 * 7}`;

			router.push("/sign-in");
		}
	};

	return { formData, errors, handleChange, handleSubmit };
};

export default useRegister;
