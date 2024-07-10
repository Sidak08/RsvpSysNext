import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    let currentUser = false;

    const cookieStore = cookies();
    let cookieValue = cookieStore.get("loginInfo")?.value || false;

    if (cookieValue) {
      cookieValue = JSON.parse(cookieValue);

      // Construct absolute URL
      const baseUrl = request.nextUrl.origin;
      const absoluteUrl = `${baseUrl}/api/auth/login`;

      // Use the absolute URL
      try {
        const res = await axios.post(absoluteUrl, cookieValue);
        currentUser = res.data.success;
      } catch (error) {
        console.error("Error in axios call:", error);
      }
    }

    if (!currentUser && request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  1;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|auth|^$).*)"],
};
