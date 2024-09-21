import { Baby, HeartPulse, LucideIcon, Siren } from "lucide-react";
import React from "react";

interface departments {
	icon: LucideIcon;
	name: string;
}

const Departments = () => {
	//
	const departmentsList: departments[] = [
		{ icon: Siren, name: "Emergency Department" },
		{ icon: Baby, name: "Pediatric Department" },
		{ icon: Baby, name: "Gynecology Department" },
		{ icon: HeartPulse, name: "Cardiology Department" },
		{ icon: Baby, name: "Neurologiy Department" },
	];
	//

	return (
		<div className="mt-20 px-6 md:px-28 w-full">
			<div className="relative flex items-center justify-center flex-col">
				<div className="w-full h-60 lg:h-80 bg-dep-bg bg-cover bg-no-repeat rounded-3xl absolute top-0 left-0 -z-10"></div>
				<div className="bg-transparent flex items-start justify-between flex-col mt-20 lg:mt-28 gap-6 w-full min-h-80">
					<div className="w-full">
						<h1 className="title-style text-center">Departments</h1>
					</div>
					<div className="bg-transparent flex flex-wrap items-center justify-center gap-2 md:gap-3 w-full">
						{departmentsList.map((val, i) => (
							<div
								key={i}
								className="bg-background w-44 h-52 lg:w-56 lg:h-60 p-0 lg:p-6 flex items-center justify-center flex-col gap-3 rounded-xl"
							>
								<val.icon className="w-11 h-11 text-primary" />
								<h3 className="font-medium text-xl text-primary text-center">{val.name}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Departments;
