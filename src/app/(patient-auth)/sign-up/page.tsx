import SignUpForm from "@/components/auth/PatientSignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign Up",
};

const SignUp = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<h2 className="font-bold text-2xl lg:text-3xl text-foreground">
					Register
				</h2>
				<p className="text-sm lg:text-base text-foreground">
					Join our healthcare community to access personalized services and book
					appointments.
				</p>
			</div>
			<SignUpForm />
		</div>
	);
};

export default SignUp;
