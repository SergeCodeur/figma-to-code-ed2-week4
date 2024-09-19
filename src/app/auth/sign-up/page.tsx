import React from "react";
import Input from "../ui/input";

const SignUp = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<div className="flex flex-col space-y-3 ">
				<span className="font-extrabold text-3xl text-primary-900">
					Register
				</span>
				<span className="text-base text-primary-900">
					Join our healthcare community to access personalized services and book
					appointments.
				</span>
			</div>
			<div className="flex flex-col space-y-4 w-full">
				<Input className="input-block" placeholder="Doe" type="text" />
				<Input className="input-block" placeholder="John" type="text" />
				<Input
					className="input-block"
					placeholder="john@gmail.com"
					type="email"
				/>
				<Input className="input-block" placeholder="********" type="password" />
			</div>
			<div></div>
		</div>
	);
};

export default SignUp;
