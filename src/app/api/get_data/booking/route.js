import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req, res) {
  const client = await clientPromise;
  const db = client.db();
  let currentUser = false;
  let user = false;
  const data = await req.json();

  const cookieStore = cookies();
  let cookieValue = cookieStore.get("loginInfo")?.value || false;

  if (cookieValue) {
    cookieValue = JSON.parse(cookieValue);
    const absoluteUrl = `${process.env.BASE_URL}/api/auth/login`; // Ensure BASE_URL is defined

    try {
      const res = await axios.post(absoluteUrl, cookieValue);
      currentUser = res.data.success;
    } catch (error) {
      console.error("Error in axios call:", error);
    }

    if (currentUser) {
      user = await db
        .collection("users")
        .findOne({ email: cookieValue.email.toLowerCase().trim() });
      console.log(user);

      return NextResponse.json({
        success: true,
        URL: user.booking_URL,
      });
    }
  }

  return NextResponse.json({ success: false });
}
