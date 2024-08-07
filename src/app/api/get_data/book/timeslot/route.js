import { NextResponse } from "next/server";
import getClosestTimeSlots from "@/app/api/components/getClosestTime";
import clientPromise from "@/app/components/mongodb";
import fixClosestTime from "@/app/api/components/fixClosestTime";

const startTime = "08:20";
const startDate = "2024-08-02";
let track = 4;

export async function POST(req, res) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const user = await db.collection("users").findOne({ booking_URL: data.url });

  if (user) {
    const availableBookingSpots = fixClosestTime(
      getClosestTimeSlots(
        user.dashboardData.elementsArray,
        data.bookingTime,
        data.bookingDate,
        4,
      ),
    );
    // console.log(availableBookingSpots);
    return NextResponse.json({
      success: true,
      availableBookingSpots: availableBookingSpots,
    });
  }

  return NextResponse.json({
    success: false,
    availableBookingSpots: false,
  });
}
