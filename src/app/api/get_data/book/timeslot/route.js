import { NextResponse } from "next/server";
import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";

const tables = [
  {
    reservation: [],
    id: 222372,
  },
  {
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
    reservation: [],
    id: 583444,
  },
  {
    reservation: [],
    id: 178201,
  },
  {
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

function getClosestTimeSlots(tables, bookingTime) {}

console.log(getClosestTimeSlots(tables, "18:20"));
