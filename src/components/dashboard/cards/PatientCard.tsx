"use client";
import Button from "@/components/ui/Button";
import { PatienCardProps } from "@/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const PatientCard = ({
	img,
	gender,
	firstName,
	lastName,
	adress,
	weight,
	bloodPressure,
	bloodGlucose,
	className,
}: PatienCardProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = () => {
		router.push(`${pathname}/details`);
	};

	return (
		<div
			className={`${className} p-5 bg-white rounded-2xl border border-dark-blue/20 h-full flex flex-col justify-between gap-2.5`}
		>
			<div className="space-y-2 pb-5 border-b border-dark-blue/20">
				<div className="flex items-center justify-between">
					<Image
						src={img}
						alt={firstName}
						width={50}
						height={50}
						className="rounded-full"
					/>
					<span className="text-sm">Gender : {gender}</span>
				</div>
				<div>
					<h3 className="font-semibold">
						{firstName} {lastName}
					</h3>
					<p className="text-sm font-light">{adress}</p>
				</div>
			</div>
			<ul className="space-y-2.5">
				<li className="flex justify-between items-center text-sm">
					<span className="font-light">weight :</span>
					<span className="font-medium">{weight}</span>
				</li>
				<li className="flex justify-between items-center text-sm">
					<span className="font-light">Blood Pressure :</span>
					<span className="font-medium">{bloodPressure}</span>
				</li>
				<li className="flex justify-between items-center text-sm">
					<span className="font-light">Blood Glucose :</span>
					<span className="font-medium">{bloodGlucose}</span>
				</li>
			</ul>
			<Button
				variant="linear_color"
				className="w-full  inline-flex justify-center items-center gap-2.5 rounded-ls px-4 py-2.5 text-sm font-medium text-white"
				onClick={handleClick}
			>
				View detail patient
			</Button>
		</div>
	);
};

export default PatientCard;
