// Function to retrieve appointments from localStorage
export const getAppointmentsFromLocalStorage = (): any[] => {
	return JSON.parse(localStorage.getItem("stepData") || "[]");
};

// Function to sort appointments by date
export const sortAppointmentsByDate = (appointments: any[]): any[] => {
	return appointments.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
};

// Function to group appointments by date
export const groupAppointmentsByDate = (
	appointments: any[],
): { [key: string]: any[] } => {
	return appointments.reduce((acc: any, curr: any) => {
		const date = new Date(curr.date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});

		if (!acc[date]) {
			acc[date] = [];
		}

		acc[date].push(curr);
		return acc;
	}, {});
};
