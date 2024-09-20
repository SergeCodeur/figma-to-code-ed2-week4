import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Arrow from "../ui/arrow";
import Link from "next/link";

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
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-primary-100 text-sm">First name</label>
					<Input className="input-block" placeholder="Doe" type="text" />
				</div>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-primary-100 text-sm">Last name</label>
					<Input className="input-block" placeholder="John" type="text" />
				</div>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-primary-100 text-sm">Email</label>

					<Input
						className="input-block"
						placeholder="john@gmail.com"
						type="email"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<label className="ml-2 text-primary-100 text-sm">Password</label>

					<Input
						className="input-block"
						placeholder="********"
						type="password"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<Button
						className="flex py-2 text-center bg-gradient-to-r from-primary-400
				 to-primary-900 rounded-full w-2/5 justify-center items-center space-x-2"
					>
						<span className="text-white text-base">Register</span>
						<Arrow />
					</Button>
					<span className="text-xs text-primary-900">
						Already have an account ?
						<Link href="/" className="text-primary-100 ml-2 font-extrabold">
							Log In
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
