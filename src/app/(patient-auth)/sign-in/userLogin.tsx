// import { useState } from "react";
// import { verifyPassword } from "../utils/hash";
// import { useRouter } from "next/navigation";
// import { FormData } from "../utils/interface";

// type Login = Pick<FormData, "email" | "password">;
// const useLogin = () => {
// 	const [formData, setFormData] = useState<Login>({
// 		email: "",
// 		password: "",
// 	});
// 	const [errors, setErrors] = useState<Partial<Login>>({});
// 	const router = useRouter();
// 	const validationRules: {
// 		[key in keyof Login]: (value: string) => string | undefined;
// 	} = {
// 		email: value =>
// 			!/\S+@\S+\.\S+/.test(value) ? "Email is not valid" : undefined,
// 		password: value =>
// 			value.length < 6
// 				? "Password must be be at least 6 characters"
// 				: undefined,
// 	};

// 	const validateField = (
// 		name: keyof Login,
// 		value: string,
// 	): string | undefined => {
// 		return validationRules[name](value);
// 	};
// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
// 		setFormData(prevData => ({ ...prevData, [name]: value }));

// 		const error = validateField(name as keyof Login, value);
// 		setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
// 	};

// 	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const validationErrors: Partial<Login> = {};

// 		for (const key in formData) {
// 			const error = validateField(
// 				key as keyof Login,
// 				formData[key as keyof Login],
// 			);
// 			if (error) {
// 				validationErrors[key as keyof Login] = error;
// 			}
// 		}

// 		if (Object.keys(validationErrors).length > 0) {
// 			setErrors(validationErrors);
// 		} else {
// 			const user: Login = JSON.parse(localStorage.getItem("user") || "null");
// 			if (user) {
// 				if (
// 					user.email === formData.email &&
// 					verifyPassword(formData.password, user.password)
// 				) {
// 					router.push("/");
// 				} else {
// 					alert("Invalid email or password");
// 				}
// 			} else {
// 				alert("No user found, please register yourself");
// 			}
// 		}
// 	};

// 	return { formData, errors, handleLogin, handleChange };
// };

// export default useLogin;
