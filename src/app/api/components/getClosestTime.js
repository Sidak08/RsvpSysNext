import calcEndTime from "@/app/api/components/calcEndTime";
import changeDateIntoMin from "@/app/api/components/changeDateIntoMin";
import checkAvailability from "@/app/api/components/checkAval";
import calculateEndTime from "@/app/api/components/calcEndTime";

function getClosestTimeSlots(tables, bookingTime, bookingDate, track) {
  const bookTimeCopy = bookingTime;
  const bookDateCopy = bookingDate;
  const stayLength = 120;
  let availableBookingSpots = [];

  const { endTime, endDate } = calcEndTime(bookingTime, bookingDate, stayLength);

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
        track
      );
    }
  }

  availableBookingSpots = getClosestBookings(
    availableBookingSpots,
    bookTimeCopy,
    bookDateCopy,
  );

  return availableBookingSpots;
}

const recurr = (
  bookingTime,
  bookingDate,
  endTime,
  endDate,
  reservations,
  availableBookingSpots,
  stayLength,
  id,
  track
) => {
  for (let i = 0; i < track; i++) {
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
      break;
    } else {
      const newEndTimeDate = calculateEndTime(
        elementEndTime,
        elementEndDate,
        stayLength + 1,
      );
      endTime = newEndTimeDate.endTime;
      endDate = newEndTimeDate.endDate;

      const tmp = calculateEndTime(elementEndTime, elementEndDate, 1);
      bookingTime = tmp.endTime;
      bookingDate = tmp.endDate;
    }
  }
};

const getClosestBookings = (bookings, bookingTime, bookingDate) => {
  const inputBookingDateTime = new Date(`${bookingDate}T${bookingTime}:00`);

  const uniqueBookings = [];
  const seenBookingKeys = new Set();

  bookings.forEach((booking) => {
    const bookingKey = `${booking.bookingDate}T${booking.bookingTime}`;
    if (!seenBookingKeys.has(bookingKey)) {
      uniqueBookings.push(booking);
      seenBookingKeys.add(bookingKey);
    }
  });

  const bookingsWithTimeDiff = uniqueBookings.map((booking) => {
    const bookingDateTime = new Date(
      `${booking.bookingDate}T${booking.bookingTime}:00`,
    );
    const timeDiff = Math.abs(bookingDateTime - inputBookingDateTime);
    return { ...booking, timeDiff };
  });

  bookingsWithTimeDiff.sort((a, b) => a.timeDiff - b.timeDiff);

  return bookingsWithTimeDiff.slice(0, 3);
};

export default getClosestTimeSlots;