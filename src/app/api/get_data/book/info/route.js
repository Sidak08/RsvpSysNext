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
    const tables = user.dashboardData.elementsArray.find(
      (item) => item.id == data.id,
    );
    const index = user.dashboardData.elementsArray.findIndex(
      (item) => item.id == data.id,
    );
    // console.log(6, index);
    // console.log(data, tables);
    const { endTime: endTime, endDate: endDate } = calculateEndTime(
      data.time,
      data.date,
      120,
    );
    // console.log(endTime, endDate);
    const id = genrateId(user.dashboardData.upComingReservations);
    if (
      checkAvailability(
        data.time,
        data.date,
        endTime,
        endDate,
        changeDateIntoMinutes,
        tables.reservation,
      ).opp
    ) {
      console.log(
        21,
        data.time,
        data.date,
        endTime,
        endDate,
        changeDateIntoMinutes,
        tables,
        checkAvailability(
          data.time,
          data.date,
          endTime,
          endDate,
          changeDateIntoMinutes,
          tables.reservation,
        ),
      );
      // console.log(8, user.dashboardData.elementsArray[index]);
      user.dashboardData.elementsArray[index].reservation.push({
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

      // console.log(4, works, user.dashboardData);
      return NextResponse.json({
        tableId: data.id,
        rsvpId: id,
        success: works,
        errors: [],
      });
    }
  }

  return NextResponse.json({
    success: false,
    errors: ["Booking Not Available"],
  });
}
//222372
