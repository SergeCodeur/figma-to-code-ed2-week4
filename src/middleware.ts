import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith("/dashboard-doctor")) {
		const doctorId = request.cookies.get("doctorId");

		if (!doctorId) {
			return NextResponse.redirect(new URL("/doctor-login", request.url));
		}
	} else if (request.nextUrl.pathname.startsWith("/dashboard-patient")) {
		const userId = request.cookies.get("userId");

		if (!userId) {
			return NextResponse.redirect(new URL("/sign-in", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard-doctor/:path*", "/dashboard-patient/:path*"],
};
