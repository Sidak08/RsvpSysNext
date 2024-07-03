import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware triggered");
  console.log("Request URL:", request.nextUrl.pathname);
  const currentUser = false;

  if (!currentUser && request.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("Redirecting to /auth/login");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
