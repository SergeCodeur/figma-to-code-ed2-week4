type PatientDetailsCardFooterProps = {
	title?: string;
	profileCompletion?: {
		title: string;
		percentage: string;
	};
	weight: string;
	height: string;
	gender: string;
	bloodType: string;
	bloodGlucose: string;
	bloodPressure: string;
	diase: string;
	allergies: string;
};

const PatientDetailsCardFooter: React.FC<PatientDetailsCardFooterProps> = ({
	title,
	profileCompletion,
	weight,
	height,
	gender,
	bloodType,
	bloodGlucose,
	bloodPressure,
	diase,
	allergies,
}) => {
	return (
		<div className="flex flex-col items-center border border-dark-blue/20 rounded-2xl p-5 w-full">
			<div className="space-y-2.5 text-center mt-2.5 w-full">
				{title && <h3 className="text-xl font-semibold">{title}</h3>}
				{profileCompletion && (
					<div className="space-y-2.5">
						<div className="flex justify-between items-center">
							<h3 className="text-sm font-medium">{profileCompletion.title}</h3>
							<span className="text-sm font-medium">
								{profileCompletion.percentage}%
							</span>
						</div>
						<div className="w-full bg-gray rounded-full h-2.5">
							<div
								className={`bg-dark-blue h-2.5 rounded-full`}
								style={{ width: `${profileCompletion.percentage}%` }}
							></div>
						</div>
					</div>
				)}
				<ul className="space-y-2.5 w-full text-xs md:text-sm">
					<li className="flex justify-between items-center">
						<span className="font-light">Weight :</span>
						<span className="font-medium">{weight}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Height :</span>
						<span className="font-medium">{height}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Gender :</span>
						<span className="font-medium">{gender}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Blood Type :</span>
						<span className="font-medium">{bloodType}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Blood Glucose :</span>
						<span className="font-medium">{bloodGlucose}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Blood Pressure :</span>
						<span className="font-medium">{bloodPressure}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Diase :</span>
						<span className="font-medium">{diase}</span>
					</li>
					<li className="flex justify-between items-center">
						<span className="font-light">Allergies :</span>
						<span className="font-medium">{allergies}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PatientDetailsCardFooter;
