"use client";
import { ArrowLeft, ArrowRight } from "@/assets/icons";
import { patientsList } from "@/constants/PatientList";
import { useState } from "react";
import PatientCard from "./cards/PatientCard";

const PatientListContainer = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const patientsPerPage = 8;

	const indexOfLastPatient = currentPage * patientsPerPage;
	const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
	const currentPatients = patientsList.slice(
		indexOfFirstPatient,
		indexOfLastPatient,
	);

	const totalPages = Math.ceil(patientsList.length / patientsPerPage);

	const handleNextPage = () => {
		setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
	};

	const handlePrevPage = () => {
		setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
	};

	return (
		<div className="w-full space-y-2">
			<ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{currentPatients.map((patient, index) => (
					<li key={index}>
						<PatientCard {...patient} />
					</li>
				))}
			</ul>
			<div className="flex justify-between items-center">
				<p>
					Showing {currentPage} to {totalPages} of {patientsList.length} results
				</p>
				<div className="flex items-center gap-2.5">
					<button
						className="flex justify-center items-center w-12 h-12 bg-blue/20 rounded-ls"
						onClick={handlePrevPage}
						disabled={currentPage === 1}
					>
						<ArrowLeft />
					</button>
					<button
						className="flex justify-center items-center w-12 h-12 bg-blue/20 rounded-ls"
						onClick={handleNextPage}
						disabled={currentPage === totalPages}
					>
						<ArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PatientListContainer;
