import calculateEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMinutes from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ booking_URL: data.url });

  if (user) {
    for (let i = 0; i < user.dashboardData.elementsArray.length; i++) {
      console.log(i);
      console.log(user.dashboardData.elementsArray[i].id, data.id);
      if (user.dashboardData.elementsArray[i].id == data.id) {
        console.log(user.dashboardData.elementsArray[i]);
      }
    }
    // console.log(tables, user.dashboardData.elementsArray, data.id);
  }

  return NextResponse.json({
    success: false,
    errors: [],
  });
}
//222372
