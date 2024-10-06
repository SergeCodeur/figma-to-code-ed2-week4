import PatientDetailsCardFooter from "./PatientDetailsCardFooter";
import PatientDetailsCardHeader from "./PatientDetailsCardHeader";

const PatientDetailsCard = ({ name }: { name: string }) => {
	return (
		<div className="space-y-5">
			<PatientDetailsCardHeader
				avatar="/images/patient.png"
				name={name}
				id="#DOC0223"
				address="Preston Inglewood, Maine 98380"
				appointments={19}
				completed={18}
			/>
			<PatientDetailsCardFooter
				weight="160lb"
				height="1.80 m"
				gender="Men"
				bloodType="O+ (Positive)"
				bloodGlucose="2000 mg/dL "
				bloodPressure="124/79 mmHd"
				diase="Diabetes"
				allergies="Peanut"
			/>
		</div>
	);
};

export default PatientDetailsCard;
