import { NextResponse } from "next/server";
import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";

const startTime = "18:20";
const startDate = "2024-08-02";

const tables = [
  {
    reservation: [],
    id: 222372,
  },
  {
    reservation: [
      {
        startTime: "20:21",
        endTime: "21:21",
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
  const stayLenght = 120;
  const avalBookSpot = [];
  const { endTime, endDate } = calcEndTime(
    bookingTime,
    bookingDate,
    stayLenght,
  );
  console.log(3, endTime, endDate);

  for (let i = 0; i < tables.length; i++) {
    const { opp, elementStartTime, elementEndTime } = checkAvailability(
      bookingTime,
      bookingDate,
      endTime,
      endDate,
      changeDateIntoMin,
      tables[i].reservation,
    );
    if (opp) {
      avalBookSpot.push({
        tableId: tables[i].id,
        bookingTime,
        bookingDate,
        endTime,
        endDate,
      });
    } else {
    }
  }

  const recurr = (
    bookingTime,
    bookingDate,
    endTime,
    endDate,
    tables,
    avalBookSpot,
  ) => {};

  console.log(avalBookSpot);
}

console.log(getClosestTimeSlots(tables, startTime, startDate));
