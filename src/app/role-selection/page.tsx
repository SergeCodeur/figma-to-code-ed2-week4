import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Role Selection",
};

const RoleSection = () => {
	return (
		<div className="w-full h-dvh flex flex-col gap-3 justify-center items-center">
			<div className="flex items-center justify-center flex-col max-w-sm bg-blue/10 rounded-ls p-5 ">
				<h1 className="text-xl md:text-2xl font-bold">Role section</h1>
				<p className="text-center text-sm md:text-base mt-4">
					Welcome to our platform demo. To access the different functionalities,
					please choose your role below.
				</p>
				<div className="flex items-center gap-4 mt-5">
					<Link
						className="bg-blue/20 text-dark-blue inline-flex justify-center items-center gap-2.5 rounded-lg px-10 py-2.5 text-xs md:text-base font-medium"
						href="/sign-in"
					>
						Patient
					</Link>
					<Link
						className="bg-blue/20 text-dark-blue inline-flex justify-center items-center gap-2.5 rounded-lg px-10 py-2.5 text-xs md:text-base font-medium"
						href="/doctor-login"
					>
						Doctor
					</Link>
				</div>
			</div>
			<p className="text-xs font-semibold">
				Please note that this page would not normally exist.
			</p>
		</div>
	);
};

export default RoleSection;
