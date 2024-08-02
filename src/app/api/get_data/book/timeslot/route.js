import { NextResponse } from "next/server";

const reservationTime = "19:32";

export async function POST(req, res) {
  return NextResponse.json({
    success: false,
    value: console.log(getClosestTimeSlots(reservations, reservationTime)),
  });
}

function getClosestTimeSlots(reservations, reservationTime) {
  // Helper function to round time to the nearest 10 minutes
  function roundToNearest10Minutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const roundedMinutes = Math.round(minutes / 10) * 10;
    return `${hours.toString().padStart(2, "0")}:${roundedMinutes.toString().padStart(2, "0")}`;
  }

  // Helper function to convert time to minutes for easy comparison
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Round the reservation time to the nearest 10 minutes
  const roundedReservationTime = roundToNearest10Minutes(reservationTime);
  const reservationTimeInMinutes = timeToMinutes(roundedReservationTime);

  // Find the closest time slots
  const closestSlots = reservations
    .map((reservation) => {
      const startTimeRounded = roundToNearest10Minutes(reservation.startTime);
      const startTimeInMinutes = timeToMinutes(startTimeRounded);
      return {
        ...reservation,
        startTimeRounded,
        startTimeInMinutes,
        difference: Math.abs(startTimeInMinutes - reservationTimeInMinutes),
      };
    })
    .sort((a, b) => a.difference - b.difference)
    .slice(0, 3);

  // Return the three closest time slots rounded to the nearest 10 minutes
  return closestSlots.map((slot) => slot.startTimeRounded);
}

const reservations = [
  {
    name: [],
    number: [],
    email: [],
    phone: [],
    notes: [],
    startTime: "18:13",
    endTime: "20:13",
    startDate: "2024-07-30",
    endDate: "2024-07-30",
    people: 1,
    tableId: 95311,
    id: 520487,
  },
  {
    name: [],
    number: [],
    email: [],
    phone: [],
    notes: [],
    startTime: "19:36",
    endTime: "21:36",
    startDate: "2024-08-01",
    endDate: "2024-08-01",
    people: 1,
    tableId: 95311,
    id: 547730,
  },
  {
    name: [],
    number: [],
    email: [],
    phone: [],
    notes: [],
    startTime: "19:36",
    endTime: "21:36",
    startDate: "2024-08-09",
    endDate: "2024-08-09",
    people: 1,
    tableId: 765816,
    id: 480694,
  },
  {
    name: [],
    number: [],
    email: [],
    phone: [],
    notes: [],
    startTime: "19:36",
    endTime: "21:36",
    startDate: "2024-08-09",
    endDate: "2024-08-09",
    people: 1,
    tableId: 95311,
    id: 307444,
  },
  {
    name: [],
    number: [],
    email: [],
    phone: [],
    notes: [],
    startTime: "19:36",
    endTime: "21:36",
    startDate: "2024-08-14",
    endDate: "2024-08-14",
    people: 1,
    tableId: 765816,
    id: 428635,
  },
];

console.log(getClosestTimeSlots(reservations, reservationTime));
