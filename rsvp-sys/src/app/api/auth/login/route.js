import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import fixInfo from "../../../components/fixInfoLogin";

export async function POST(req, res) {
  const data = fixInfo(await req.json());
  const client = await clientPromise;
  const db = client.db();

  console.log("Data:", data);
  const user = await db.collection("users").findOne({ email: data.email });
  console.log("User:", user);

  if (user) {
    if (data.password === user.password) {
      //console.log("Correct password");
      return NextResponse.json({ success: true });
    } else {
      //console.log("Incorrect password");
      return NextResponse.json({ success: false, error: "Incorrect Password" });
    }
  }
  // console.log("User not found");
  return NextResponse.json({ success: false, error: "User Not Found" });
}
