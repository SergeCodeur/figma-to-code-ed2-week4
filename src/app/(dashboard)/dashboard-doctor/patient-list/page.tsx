import { DownloadSquare, Filter, Search } from "@/assets/icons";
import PatientListContainer from "@/components/dashboard/PatientListContainer";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Patient List",
};

const PatientLists = () => {
	return (
		<div className="w-full space-y-7">
			<h1 className="text-3xl font-semibold">PatientList</h1>
			<div className="w-full space-y-7">
				<div className="flex justify-between max-md:flex-col w-full items-center gap-2 md:gap-5">
					<div className="lg:w-fit w-full relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue/50" />
						<input
							type="text"
							placeholder="Search patient"
							className="lg:w-[361px] w-full text-xs md:text-sm border-dark-blue/50 border rounded-2xl pl-11 pr-4 py-2 text-dark-blue placeholder:text-dark-blue/50"
						/>
					</div>
					<div className="flex items-center gap-3 md:gap-5">
						<Button>
							<DownloadSquare />
							<span className="lg:block hidden md:text-sm">
								Download Report
							</span>
						</Button>
						<Button>
							<Filter />
							<span className="sm:block hidden md:text-sm">Filter</span>
						</Button>
					</div>
				</div>
				<PatientListContainer />
			</div>
		</div>
	);
};

export default PatientLists;
