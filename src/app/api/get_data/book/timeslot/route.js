import { NextResponse } from "next/server";

// const reservationTime = "19:32";
const tables = [
  {
    image: {},
    x: null,
    y: null,
    width: 70,
    height: 50,
    selected: false,
    reSize: false,
    title: "Rectangle Table",
    reservation: [],
    id: 222372,
  },
  {
    image: {},
    x: 569,
    y: 176,
    width: 70,
    height: 50,
    selected: false,
    reSize: false,
    title: "Rectangle Table",
    reservation: [
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
        tableId: 95311,
        id: 307444,
      },
    ],
    id: 95311,
  },
  {
    image: {},
    x: 738,
    y: 358,
    width: 0,
    height: 0,
    selected: false,
    reSize: false,
    reservation: [],
    id: 583444,
  },
  {
    image: {},
    x: 769,
    y: 444,
    width: 0,
    height: 0,
    selected: false,
    reSize: false,
    reservation: [],
    id: 178201,
  },
  {
    image: {},
    x: 914.3333333333333,
    y: 226.33333333333326,
    width: 70,
    height: 50,
    selected: false,
    reSize: false,
    title: "Rectangle Table",
    reservation: [
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
        startDate: "2024-08-14",
        endDate: "2024-08-14",
        people: 1,
        tableId: 765816,
        id: 428635,
      },
    ],
    id: 765816,
  },
];

export async function POST(req, res) {
  return NextResponse.json({
    success: false,
    // value: console.log(getClosestTimeSlots(tables, "18:00")),
  });
}

function getClosestTimeSlots(tables, bookingTime) {
  // Convert booking time to a Date object
  let [hours, minutes] = bookingTime.split(":").map(Number);
  let bookingDate = new Date();
  bookingDate.setHours(hours, Math.floor(minutes / 10) * 10, 0, 0);

  // Helper function to round time to the nearest 10-minute interval
  function roundToNearestTen(date) {
    let newDate = new Date(date.getTime());
    let minutes = newDate.getMinutes();
    newDate.setMinutes(Math.ceil(minutes / 10) * 10);
    return newDate;
  }

  // Helper function to format date to HH:MM
  function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Create an array of available time slots
  let availableTimeSlots = [];

  tables.forEach((table) => {
    if (table.reservation.length === 0) {
      // Generate time slots for tables with no reservations
      for (let i = 0; i < 24 * 6; i++) {
        let timeSlot = new Date(bookingDate.getTime());
        timeSlot.setMinutes(i * 10);
        availableTimeSlots.push({
          tableId: table.id,
          timeSlot: timeSlot,
        });
      }
    } else {
      table.reservation.forEach((reservation) => {
        let startDateTime = new Date(
          `${reservation.startDate}T${reservation.startTime}`,
        );
        let endDateTime = new Date(
          `${reservation.endDate}T${reservation.endTime}`,
        );
        let timeSlot = roundToNearestTen(startDateTime);

        while (timeSlot < endDateTime) {
          availableTimeSlots.push({
            tableId: table.id,
            timeSlot: timeSlot,
          });
          timeSlot = new Date(timeSlot.getTime() + 10 * 60000); // increment by 10 minutes
        }
      });
    }
  });

  // Sort available time slots by the closest to the booking time
  availableTimeSlots.sort(
    (a, b) =>
      Math.abs(a.timeSlot - bookingDate) - Math.abs(b.timeSlot - bookingDate),
  );

  // Get the three closest time slots and log the table they belong to
  let closestTimeSlots = availableTimeSlots.slice(0, 3);

  closestTimeSlots.forEach((slot) => {
    console.log(
      `Table ID: ${slot.tableId}, Time Slot: ${formatTime(slot.timeSlot)}`,
    );
  });

  return closestTimeSlots.map((slot) => formatTime(slot.timeSlot));
}

console.log(getClosestTimeSlots(tables, "18:20"));
