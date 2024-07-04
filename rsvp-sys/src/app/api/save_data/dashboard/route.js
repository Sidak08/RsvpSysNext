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

  console.log("Request Body: 4", data);

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

    console.log("Cookie Value:", cookieValue, currentUser, "currentUser");
    if (currentUser) {
      console.log("User is logged in", cookieValue);
      user = await db.collection("users").findOne({ email: cookieValue.email });
      console.log("User:", user);
      const works = await db
        .collection("users")
        .updateOne(
          { email: cookieValue.email },
          { $set: { dashboardData: data } },
        );
      console.log("User2:", user);
      return NextResponse.json({ success: works });
    }
  }

  return NextResponse.json({ success: false });
}
