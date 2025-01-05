import calculateEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMinutes from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import clientPromise from "@/app/components/mongodb";
import { NextResponse } from "next/server";
import genrateId from "@/app/api/components/generateId";
import orderRsvp from "@/app/api/components/orderRsvp";

export async function POST(req, res) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("users").findOne({ booking_URL: data.url });

    if (user) {
      const { table, tableIndex } = findTable(user.dashboardData.elementsArray, data.id);
      const { endTime, endDate } = calculateEndTime(data.time, data.date, 120);
      const id = genrateId(user.dashboardData.upComingReservations);

      if (isBookingAvailable(data, endTime, endDate, table.reservation)) {
        updateUserReservations(user, tableIndex, data, endTime, endDate, id);
        const success = await saveUserData(db, data.url, user.dashboardData);

        return NextResponse.json({
          tableId: data.id,
          rsvpId: id,
          success: success,
          errors: [],
        });
      }
    }

    return NextResponse.json({
      success: false,
      errors: ["Booking Not Available"],
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json({
      success: false,
      errors: ["An error occurred while processing your booking. Please try again."],
    });
  }
}

const findTable = (elementsArray, tableId) => {
  const table = elementsArray.find(item => item.id == tableId);
  const tableIndex = elementsArray.findIndex(item => item.id == tableId);
  return { table, tableIndex };
};

const isBookingAvailable = (data, endTime, endDate, reservations) => {
  return checkAvailability(
    data.time,
    data.date,
    endTime,
    endDate,
    changeDateIntoMinutes,
    reservations,
  ).opp;
};

const updateUserReservations = (user, tableIndex, data, endTime, endDate, id) => {
  const newReservation = {
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
  };

  user.dashboardData.elementsArray[tableIndex].reservation.push(newReservation);
  user.dashboardData.upComingReservations.push(newReservation);
  user.dashboardData.upComingReservations = orderRsvp(user.dashboardData.upComingReservations);
};

const saveUserData = async (db, url, dashboardData) => {
  const result = await db.collection("users").updateOne(
    { booking_URL: url },
    { $set: { dashboardData: dashboardData } },
  );
  return result.modifiedCount > 0;
};