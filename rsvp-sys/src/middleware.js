import { NextResponse } from "next/server";
import axios from "axios";
import readLocalStorage from "./app/components/localStorage";
import { cookies } from "next/headers";
import clientPromise from "./app/components/mongodb";
import fixInfo from "./app/components/fixInfoLogin";

const checkUserLogin = async (info) => {
  const data = fixInfo(info);
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email: data.email });

  if (user) {
    if (data.password === user.password) {
      //console.log("Correct password");
      return { success: true };
    } else {
      //console.log("Incorrect password");
      return { success: false, error: "Incorrect Password" };
    }
  }
  // console.log("User not found");
  return { success: false, error: "User Not Found" };
};

export function middleware(request) {
  // const localStorage = readLocalStorage();
  let currentUser = false;

  const cookieStore = cookies();
  let cookieValue = cookieStore.get("loginInfo")?.value || false;

  if (cookieValue) {
    cookieValue = JSON.parse(cookieValue);
  }
  console.log(cookieValue, "cookieValue2");

  if (cookieValue) {
    currentUser = checkUserLogin(cookieValue);
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
