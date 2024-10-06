export const formatAppointmentDate = (
	dateString: string,
	time: string,
): string => {
	const date = new Date(dateString);

	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	const formattedDate = date.toLocaleDateString("en-US", options);

	const [hour, minute] = time.split(":");
	const hour12Format = (+hour % 12 || 12).toString(); // Convertir en format 12 heures
	const period = +hour < 12 ? "AM" : "PM"; // Déterminer AM ou PM
	const formattedTime = `${hour12Format}:${minute} ${period}`;

	return `${formattedDate} on ${formattedTime}`;
};
