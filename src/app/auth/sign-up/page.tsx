import React from "react";
import Card from "../ui/card";

const SignUp = () => {
	return (
		<Card
			color="text-primary-900"
			fill={4}
			image="/images/profile.png"
			name="Eleanor Pena"
			rating={5}
			text={`"This was my first time booking a car through doctrinmade the experience
				worth it. My friend and i highly.recommended this App. Thank you for the
				greatexperience, we looking forward to booking again`}
		/>
	);
};

export default SignUp;
