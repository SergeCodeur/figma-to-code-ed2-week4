import RecoverPasswordForm from "@/components/auth/RecoveryPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recover Password",
};

const RecoverPassword = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-10 overflow-hidden">
			<div className="flex flex-col space-y-3 ">
				<h2 className="font-extrabold text-3xl text-foreground">
					Forgot Password
				</h2>
				<p className="text-sm lg:text-base text-foreground">
					Enter your email to reset your password.
				</p>
			</div>
			<RecoverPasswordForm />
		</div>
	);
};

export default RecoverPassword;
