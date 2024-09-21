const registerForm = [
	{ name: "firstName", label: "First name", placeholder: "Doe" },
	{ name: "lastName", label: "Last name", placeholder: "John" },
	{ name: "email", label: "Email", placeholder: "john@gmail.com" },
	{ name: "password", label: "Password", placeholder: "********" },
];
const logInForm = [registerForm[2], registerForm[3]];
export { registerForm, logInForm };
