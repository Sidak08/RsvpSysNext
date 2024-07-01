import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import fixInfo from "../../../components/fixInfoSignUp";

export async function POST(req, res) {
  const data = fixInfo(await req.json());

  const client = await clientPromise;
  const db = client.db();

  //console.log("Data:", data);

  const validationErrors = validateInputs(data);

  if (Object.keys(validationErrors).length > 0) {
    console.log("Validation errors:", validationErrors, data);
    return NextResponse.json({ success: false, errors: validationErrors });
  } else {
    const user = await db.collection("users").findOne({ email: data.email });

    if (user) {
      console.log("User already exists");
      return NextResponse.json({
        success: false,
        error: "User already exists",
      });
    } else {
      const result = await db.collection("users").insertOne(data);
      return NextResponse.json({ success: true });
    }
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
