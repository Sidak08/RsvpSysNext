import { NextResponse } from "next/server";
import clientPromise from "../../../components/mongodb";
import validateInputs from "../../../components/validateInput";
import fixInfo from "../../../components/fixInfoSignUp";
import generateRandomUrlSegment from "../../components/genRanSeg";

export async function POST(req, res) {
  const data = fixInfo(await req.json());

  const client = await clientPromise;
  const db = client.db();

  const validationErrors = validateInputs(data);

  if (Object.keys(validationErrors).length > 0) {
    return NextResponse.json({ success: false, errors: validationErrors });
  } else {
    const user = await db.collection("users").findOne({ email: data.email });

    if (user) {
      return NextResponse.json({
        success: false,
        errors: { user: "User already exists" },
      });
    } else {
      data.subscription = {
        plan: "free",
        product: "free",
        interval: "free",
      };
      data.booking_URL = generateRandomUrlSegment(12);
      const result = await db.collection("users").insertOne(data);
      return NextResponse.json({ success: true });
    }
  }
}
