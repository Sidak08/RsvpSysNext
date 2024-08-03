import { NextResponse } from "next/server";
import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import calculateEndTime from "@/app/api/components/calcEndTime";

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
        startTime: "18:21",
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
  // console.log(
  //   7,
  //   bookingTime,
  //   bookingDate,
  //   endTime,
  //   endDate,
  //   tables,
  //   avalBookSpot,
  // );
  // console.log(avalBookSpot);
  track = track - 1;
  if (track === 0) {
    console.log("kill");
    return;
  }
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
  // console.log(
  //   6,
  //   checkAvailability(
  //     bookingTime,
  //     bookingDate,
  //     endTime,
  //     endDate,
  //     changeDateIntoMin,
  //     tables,
  //   ),
  //   opp,
  //   elementStartTime,
  //   elementStartDate,
  //   elementEndTime,
  //   elementEndDate,
  // );
  if (opp) {
    avalBookSpot.push({
      tableId: tables.id,
      bookingTime,
      bookingDate,
      endTime,
      endDate,
    });
    console.log("found");
  } else if (!opp) {
    console.log("orignal", bookingTime, bookingDate, endTime, endDate);
    // console.log(5, elementEndTime, elementEndDate);
    ({ endTime, endDate } = calculateEndTime(
      elementEndTime,
      elementEndDate,
      stayLenght,
    ));
    console.log("new", elementEndTime, elementEndDate, endTime, endDate);
    recurr(
      elementEndTime,
      elementEndDate,
      endTime,
      endDate,
      tables,
      avalBookSpot,
      stayLenght,
    );
  }
};

console.log(getClosestTimeSlots(tables, startTime, startDate));
