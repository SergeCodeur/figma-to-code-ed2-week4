const registerForm = [
	{ name: "firstname", label: "First name", placeholder: "Doe" },
	{ name: "lastname", label: "Last name", placeholder: "John" },
	{ name: "email", label: "Email", placeholder: "john@gmail.com" },
	{ name: "password", label: "Password", placeholder: "********" },
];
const logInForm = [registerForm[2], registerForm[3]];
export { registerForm, logInForm };
