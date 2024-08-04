import { NextResponse } from "next/server";
import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import calculateEndTime from "@/app/api/components/calcEndTime";

const startTime = "08:20";
const startDate = "2024-08-02";
let track = 4;

const tables = [
  {
    reservation: [],
    id: 22234372,
  },
  {
    reservation: [],
    id: 2223472,
  },
  {
    reservation: [],
    id: 2223472,
  },
  {
    reservation: [
      {
        startTime: "07:21",
        endTime: "08:30",
        startDate: "2024-08-02",
        endDate: "2024-08-02",
        tableId: 95311,
        id: 520487,
      },
    ],
    id: 95311,
  },
  {
    reservation: [
      {
        startTime: "07:21",
        endTime: "08:25",
        startDate: "2024-08-02",
        endDate: "2024-08-02",
        tableId: 9531211,
        id: 520487,
      },
    ],
    id: 9531211,
  },
  {
    reservation: [
      {
        startTime: "07:21",
        endTime: "09:30",
        startDate: "2024-08-02",
        endDate: "2024-08-02",
        tableId: 953113,
        id: 52013487,
      },
    ],
    id: 953113,
  },
  {
    reservation: [
      {
        startTime: "07:21",
        endTime: "12:30",
        startDate: "2024-08-02",
        endDate: "2024-08-02",
        tableId: 9532311,
        id: 5207,
      },
    ],
    id: 9532311,
  },
];
console.log(getClosestTimeSlots(tables, startTime, startDate));

export async function POST(req, res) {
  return NextResponse.json({
    success: false,
    // value: console.log(getClosestTimeSlots(tables, "18:00")),
  });
}

function getClosestTimeSlots(tables, bookingTime, bookingDate) {
  const bookTimeCopy = bookingTime;
  const bookDateCopy = bookingDate;

  const stayLength = 120;
  let availableBookingSpots = [];
  const { endTime, endDate } = calcEndTime(
    bookingTime,
    bookingDate,
    stayLength,
  );

  const recurr = (
    bookingTime,
    bookingDate,
    endTime,
    endDate,
    reservations,
    availableBookingSpots,
    stayLength,
    id,
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
          tableId: id,
          bookingTime,
          bookingDate,
          endTime,
          endDate,
        });
        console.log("found");
        break;
      } else {
        console.log("original", bookingTime, bookingDate, endTime, endDate);

        const newEndTimeDate = calculateEndTime(
          elementEndTime,
          elementEndDate,
          stayLength + 1,
        );
        endTime = newEndTimeDate.endTime;
        endDate = newEndTimeDate.endDate;

        console.log("calc", newEndTimeDate);

        const tmp = calculateEndTime(elementEndTime, elementEndDate, 1);

        bookingTime = tmp.endTime;
        bookingDate = tmp.endDate;

        console.log("new", bookingTime, bookingDate, endTime, endDate);
      }
    }
  };

  function getClosestBookings(bookings, bookingTime, bookingDate) {
    // Parse the input booking time and date
    const inputBookingDateTime = new Date(`${bookingDate}T${bookingTime}:00`);

    // Filter out duplicates and create a unique set of bookings
    const uniqueBookings = [];
    const seenBookingKeys = new Set();

    bookings.forEach((booking) => {
      const bookingKey = `${booking.bookingDate}T${booking.bookingTime}`;
      if (!seenBookingKeys.has(bookingKey)) {
        uniqueBookings.push(booking);
        seenBookingKeys.add(bookingKey);
      }
    });

    // Map bookings to include the time difference from the input booking time
    const bookingsWithTimeDiff = uniqueBookings.map((booking) => {
      const bookingDateTime = new Date(
        `${booking.bookingDate}T${booking.bookingTime}:00`,
      );
      const timeDiff = Math.abs(bookingDateTime - inputBookingDateTime);
      return { ...booking, timeDiff };
    });

    // Sort bookings by the time difference
    bookingsWithTimeDiff.sort((a, b) => a.timeDiff - b.timeDiff);

    // Return the first three closest bookings
    return bookingsWithTimeDiff.slice(0, 3);
  }

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
        tables[i].id,
      );
    }
  }

  // console.log(availableBookingSpots);

  availableBookingSpots = getClosestBookings(
    availableBookingSpots,
    bookTimeCopy,
    bookDateCopy,
  );

  return availableBookingSpots;
}
