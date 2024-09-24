import SignInForm from "@/components/auth/PatientSignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
};

const SignIn = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<h2 className="font-bold text-2xl lg:text-3xl text-foreground">
					Log In
				</h2>
				<p className="text-sm lg:text-base text-foreground">
					Welcome back! Enter your email and password to access your account.
				</p>
				<SignInForm />
			</div>
		</div>
	);
};

export default SignIn;
