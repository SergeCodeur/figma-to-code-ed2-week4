export default function PatientAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex h-screen w-screen">{children}</div>;
}
