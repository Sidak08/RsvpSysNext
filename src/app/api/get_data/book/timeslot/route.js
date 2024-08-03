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
  const stayLenght = 120;
  const avalBookSpot = [];
  const { endTime, endDate } = calcEndTime(
    bookingTime,
    bookingDate,
    stayLenght,
  );
  // console.log(3, endTime, endDate);

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
      avalBookSpot.push({
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
        avalBookSpot,
        stayLenght,
      );
    }
  }
  // console.log(avalBookSpot);
}

let track = 4;
const recurr = (
  bookingTime,
  bookingDate,
  endTime,
  endDate,
  tables,
  avalBookSpot,
  stayLenght,
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
      tables,
    );
    if (opp) {
      avalBookSpot.push({
        tableId: tables.id,
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
      ({ endTime, endDate } = calculateEndTime(
        elementEndTime,
        elementEndDate,
        stayLenght,
      ));

      console.log(
        "calc",
        calculateEndTime(elementEndTime, elementEndDate, stayLenght),
      );

      bookingTime = elementEndTime;
      bookingDate = elementEndDate;

      console.log("new", bookingTime, bookingDate, endTime, endDate);
    }
  }
};

console.log(getClosestTimeSlots(tables, startTime, startDate));
