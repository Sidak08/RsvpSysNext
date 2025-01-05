import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await req.json();

    const cookieValue = getCookieValue("loginInfo");

    if (cookieValue) {
      const currentUser = await authenticateUser(cookieValue);

      if (currentUser) {
        const user = await findUserByEmail(db, cookieValue.email);

        if (user) {
          return NextResponse.json({
            success: true,
            URL: user.booking_URL,
          });
        }
      }
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ success: false, error: "An error occurred while processing your request. Please try again." });
  }
}

const getCookieValue = (cookieName) => {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get(cookieName)?.value || false;
  return cookieValue ? JSON.parse(cookieValue) : false;
};

const authenticateUser = async (cookieValue) => {
  const absoluteUrl = `${process.env.BASE_URL}/api/auth/login`; // Ensure BASE_URL is defined

  try {
    const res = await axios.post(absoluteUrl, cookieValue);
    return res.data.success;
  } catch (error) {
    console.error("Error in axios call:", error);
    return false;
  }
};

const findUserByEmail = async (db, email) => {
  try {
    return await db.collection("users").findOne({ email: email.toLowerCase().trim() });
  } catch (error) {
    console.error("Error finding user by email:", error);
    return null;
  }
};