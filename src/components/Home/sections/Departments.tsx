import DepartementCard from "@/components/Home/cards/DepartementCard";
import Title from "@/components/ui/Title";
import { DepartmentsList } from "@/constants/Departement";

const Departments = () => {
	//
	//

	return (
		<section className="mt-20 container w-full">
			<div className="relative flex items-center justify-center flex-col py-5">
				<div className="w-full h-full lg:h-80 bg-dep-bg bg-cover bg-center bg-no-repeat rounded-3xl absolute top-0 left-0 -z-10"></div>
				<div className="bg-transparent flex items-start justify-between flex-col mt-20 lg:mt-28 gap-10 w-full min-h-80">
					<div className="w-full">
						<Title className="text-center">Departments</Title>
					</div>
					<div className="bg-transparent flex flex-wrap items-center justify-center gap-2 md:gap-3 w-full">
						{DepartmentsList.map((val, i) => (
							<DepartementCard key={i} {...val} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Departments;
