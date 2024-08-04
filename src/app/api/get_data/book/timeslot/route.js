import { NextResponse } from "next/server";
import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import calculateEndTime from "@/app/api/components/calcEndTime";

const startTime = "08:20";
const startDate = "2024-08-02";

const tables = [
  {
    reservation: [],
    id: 222372,
  },
  {
    reservation: [
      {
        startTime: "08:21",
        endTime: "11:21",
        startDate: "2024-08-02",
        endDate: "2024-08-02",
        tableId: 95311,
        id: 520487,
      },
    ],
    id: 95311,
  },
];

export async function POST(req, res) {
  return NextResponse.json({
    success: false,
    // value: console.log(getClosestTimeSlots(tables, "18:00")),
  });
}

function getClosestTimeSlots(tables, bookingTime, bookingDate) {
  const stayLength = 120;
  const availableBookingSpots = [];
  const { endTime, endDate } = calcEndTime(
    bookingTime,
    bookingDate,
    stayLength,
  );

  for (let i = 0; i < tables.length; i++) {
    const {
      opp,
      elementStartTime,
      elementStartDate,
      elementEndTime,
      elementEndDate,
    } = checkAvailability(
      bookingTime,
      bookingDate,
      endTime,
      endDate,
      changeDateIntoMin,
      tables[i].reservation,
    );
    if (opp) {
      availableBookingSpots.push({
        tableId: tables[i].id,
        bookingTime,
        bookingDate,
        endTime,
        endDate,
      });
    } else {
      recurr(
        bookingTime,
        bookingDate,
        endTime,
        endDate,
        tables[i].reservation,
        availableBookingSpots,
        stayLength,
      );
    }
  }

  console.log(availableBookingSpots);
  return availableBookingSpots;
}

let track = 4;
const recurr = (
  bookingTime,
  bookingDate,
  endTime,
  endDate,
  reservations,
  availableBookingSpots,
  stayLength,
) => {
  for (let i = 0; i < track; i++) {
    let {
      opp,
      elementStartTime,
      elementStartDate,
      elementEndTime,
      elementEndDate,
    } = checkAvailability(
      bookingTime,
      bookingDate,
      endTime,
      endDate,
      changeDateIntoMin,
      reservations,
    );
    if (opp) {
      availableBookingSpots.push({
        tableId: reservations.tableId,
        bookingTime,
        bookingDate,
        endTime,
        endDate,
      });
      console.log("found");
      break;
    } else {
      console.log("original", bookingTime, bookingDate, endTime, endDate);

      // Calculate new endTime and endDate
      const newEndTimeDate = calculateEndTime(
        elementEndTime,
        elementEndDate,
        stayLength,
      );
      endTime = newEndTimeDate.endTime;
      endDate = newEndTimeDate.endDate;

      console.log("calc", newEndTimeDate);

      bookingTime = elementEndTime;
      bookingDate = elementEndDate;

      console.log("new", bookingTime, bookingDate, endTime, endDate);
    }
  }
};

console.log(getClosestTimeSlots(tables, startTime, startDate));
