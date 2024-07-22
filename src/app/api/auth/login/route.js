import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import fixInfo from "../../../components/fixInfoLogin";

export async function POST(req, res) {
  const data = fixInfo(await req.json());
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ email: data.email });

  if (user) {
    if (data.password === user.password) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Incorrect Password" });
    }
  }
  return NextResponse.json({ success: false, error: "User Not Found" });
}
