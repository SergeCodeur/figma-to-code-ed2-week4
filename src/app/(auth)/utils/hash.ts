const hashPassword = (password: string): string => {
	return password.split("").reverse().join("") + "h@sh#4";
};

const verifyPassword = (
	inputPassword: string,
	hashedPassword: string,
): boolean => {
	return hashPassword(inputPassword) === hashedPassword;
};

export { hashPassword, verifyPassword };
