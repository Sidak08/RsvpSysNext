import calculateEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMinutes from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";
import genrateId from "@/app/api/components/generateId";

export async function POST(req, res) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db();

  let user = await db.collection("users").findOne({ booking_URL: data.url });

  if (user) {
    const tables = user.dashboardData.elementsArray.find(
      (item) => item.id == data.id,
    );
    console.log(data, tables);
    const { endTime, endDate } = calculateEndTime(data.time, data.date);
    const id = genrateId(user.dashboardData.upComingReservations);
    if (
      checkAvailability(
        data.time,
        data.date,
        endTime,
        endDate,
        changeDateIntoMinutes,
        tables,
      )
    ) {
      user.dashboardData.elementsArray.push({
        name: [`${data.firstName} ${data.lastName}`],
        email: [data.email],
        phone: [data.phone],
        notes: [],
        startTime: data.time,
        endTime: endTime,
        startDate: data.date,
        endDate: endDate,
        people: 1,
        tableId: data.id,
        id: id,
      });
      user.dashboardData.upComingReservations.push({
        name: [`${data.firstName} ${data.lastName}`],
        email: [data.email],
        phone: [data.phone],
        notes: [],
        startTime: data.time,
        endTime: endTime,
        startDate: data.date,
        endDate: endDate,
        people: 1,
        tableId: data.id,
        id: id,
      });
      user.dashboardData.upComingReservations = orderRsvp(
        user.dashboardData.upComingReservations,
      );
      const works = await db
        .collection("users")
        .updateOne(
          { booking_URL: data.url },
          { $set: { dashboardData: user.dashboardData } },
        );
      return NextResponse.json({
        success: works,
        errors: [],
      });
    }
  }

  return NextResponse.json({
    success: false,
    errors: ["not found"],
  });
}
//222372
