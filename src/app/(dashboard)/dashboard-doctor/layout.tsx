"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import TopNavDoctor from "@/components/dashboard/TopNavDoctor";
import { SidebarProvider } from "@/contexts/SidebarContext";
export default function DoctorDashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<div className="w-full h-dvh flex">
				<Sidebar />
				<div className="flex-1 overflow-y-scroll h-full relative">
					<TopNavDoctor />
					<main className="mt-5 px-5 pb-8">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
