import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import { cookies } from "next/headers";

export async function POST(req, res) {
  const client = await clientPromise;
  const db = client.db();
  let currentUser = false;
  let user = false;

  const cookieStore = cookies();
  let cookieValue = cookieStore.get("loginInfo")?.value || false;

  if (cookieValue) {
    cookieValue = JSON.parse(cookieValue);

    // Construct absolute URL
    const baseUrl = request.nextUrl.origin;
    const absoluteUrl = `${baseUrl}/api/auth/login`;


    try {
      const res = await axios.post(absoluteUrl, cookieValue);
      currentUser = res.data.success;
    } catch (error) {
      console.error("Error in axios call:", error);
    }

    if (currentUser) {
      user = await db.collection("users").findOne({ cookieValue.email });
      console.log("User:", user);
    }
  }


}
