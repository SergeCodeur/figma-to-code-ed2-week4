export default function PatientAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex h-screen w-screen px-5">{children}</div>;
}
