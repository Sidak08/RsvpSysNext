import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";

export async function POST(req, res) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const validationErrors = validateInputs(data);

  if (Object.keys(validationErrors).length > 0) {
    console.log("Validation errors:", validationErrors);
    return NextResponse.json({ success: false, errors: validationErrors });
  } else {
    const result = await db.collection("users").insertOne(data);
    return NextResponse.json({ success: true });
  }
}

// use full for later

// const users = await db.collection("users").find({}).toArray();
//
// const input = {
//   email: "test@example.com",
//   password: "password123",
//   id: 1,
//   firstName: "John",
//   lastName: "Doe",
//   phone: "+1234567890",
// };
