import { DownloadSquare, Filter, Search } from "@/assets/icons";
import PatientListContainer from "@/components/dashboard/PatientListContainer";
import Button from "@/components/ui/Button";

const PatientLists = () => {
	return (
		<div className="w-full space-y-7">
			<h1 className="text-3xl font-semibold">PatientList</h1>
			<div className="w-full space-y-7">
				<div className="flex justify-between w-full items-center gap-5">
					<div className="w-fit relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue/50" />
						<input
							type="text"
							placeholder="Search patient"
							className="w-[361px] border-dark-blue/50 border rounded-2xl pl-11 pr-4 py-2 text-dark-blue placeholder:text-dark-blue/50"
						/>
					</div>
					<div className="flex items-center gap-5">
						<Button>
							<DownloadSquare />
							<span>Download Report</span>
						</Button>
						<Button>
							<Filter />
							<span>Filter</span>
						</Button>
					</div>
				</div>
				<PatientListContainer />
			</div>
		</div>
	);
};

export default PatientLists;
