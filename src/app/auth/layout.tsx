export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen w-screen">
			<div className="hidden flex-1 bg-gradient-to-r from-primary-200 to-primary-300 bg-cover order-last lg:flex">
				<div className="space-y-3 pt-8 pl-12 flex flex-col">
					<span className="text-3xl text-primary-900 font-bold">
						We give the best experience
					</span>
					<span className="max-w-[26rem] text-primary-900 text-lg">
						Dedicated virtual-consultation platform for doctors and patients to
						help them consult across various channels
					</span>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center bg-white">
				<div className="max-w-md overflow-y-auto px-4 sm:w-[500px]">
					{children}
				</div>
			</div>
		</div>
	);
}
