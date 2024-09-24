import DoctorSignInForm from "@/components/auth/DoctorSignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

const Login = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-10 max-w-[474px] mx-auto">
			<div className="flex flex-col space-y-3 ">
				<h1 className="font-bold text-3xl text-foreground">Doctor Login</h1>
				<p className="text-base text-foreground">
					Welcome back! Enter your email and password to access your account.
				</p>
			</div>
			<DoctorSignInForm />
		</div>
	);
};

export default Login;
