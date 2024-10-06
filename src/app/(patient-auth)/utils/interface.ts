interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
interface ISteperForm {
	step1: {
		firstname: string;
		lastname: string;
		phone: string;
		email: string;
		address: string;
	};
	step2: {
		date: string;
		time: string;
		type: string;
		reason: string;
		file: File | null;
	};
}

export type { FormData, ISteperForm };
