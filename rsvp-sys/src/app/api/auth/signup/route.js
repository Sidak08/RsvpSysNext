import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req, res) {
  const data = await req.json();

  const client = await clientPromise;
  const db = client.db();
  const result = await db
    .collection("users")
    .insertOne({ userName: "Sidak123" });
  const users = await db.collection("users").find({}).toArray();

  console.log(data, users);
  return NextResponse.json({ success: true });
}
