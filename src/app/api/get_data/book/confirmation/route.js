import calculateEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMinutes from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";
import genrateId from "@/app/api/components/generateId";
import orderRsvp from "@/app/api/components/orderRsvp";

export async function POST(req, res) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  let user = await db.collection("users").findOne({ booking_URL: data.url });

  if (user) {
    console.log("user", user);

    const elementIndex = user.dashboardData.elementsArray.findIndex(
      (item) => item.id == data.tableId,
    );
    console.log(
      "elementIndex",
      elementIndex,
      user.dashboardData.elementsArray[elementIndex],
    );

    const rsvpIndex = user.dashboardData.elementsArray[
      elementIndex
    ].reservation.findIndex((item) => item.id == data.rsvpId);
    console.log(
      "rsvpIndex",
      rsvpIndex,
      user.dashboardData.elementsArray[elementIndex].reservation[rsvpIndex],
    );

    if ((elementIndex, rsvpIndex)) {
      const userData =
        user.dashboardData.elementsArray[elementIndex].reservation[rsvpIndex];
      return NextResponse.json({
        info: {
          time: userData.startTime,
          date: userData.startDate,
          name: userData.name[0],
          phone: userData.phone[0],
          email: userData.email[0],
        },
        success: true,
        errors: [],
      });
    }
  }

  return NextResponse.json({
    info: {
      time: false,
      date: false,
      name: false,
      phone: false,
      email: false,
    },
    success: false,
    errors: ["Does Not Exist"],
  });
}
//222372
