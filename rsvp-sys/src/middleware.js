import { NextResponse } from "next/server";
import axios from "axios";
import readLocalStorage from "./app/components/localStorage";

export function middleware(request) {
  const localStorage = readLocalStorage();
  let currentUser = false;

  console.log(localStorage, "middleWare");
  if (localStorage) {
    console.log(localStorage, "middleWare");
    axios.post("/api/auth/login", localStorage).then((res) => {
      currentUser = res.data.succes;
    });
  }

  // const currentUser = request.locals.currentUser;
  //
  // const currentUser = true;

  if (!currentUser && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
