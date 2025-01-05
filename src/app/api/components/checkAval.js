const checkAvailability = (
  bookTime,
  bookDate,
  bookEndTime,
  bookEndDate,
  changeDateIntoMinutes,
  rsvpAry,
) => {
  try {
    const bookStartTimeInMinutes = convertToMinutes(bookTime, bookDate, changeDateIntoMinutes);
    const bookEndTimeInMinutes = convertToMinutes(bookEndTime, bookEndDate, changeDateIntoMinutes);

    for (let i = 0; i < rsvpAry.length; i++) {
      const element = rsvpAry[i];
      const elementStartTimeInMinutes = convertToMinutes(element.startTime, element.startDate, changeDateIntoMinutes);
      const elementEndTimeInMinutes = convertToMinutes(element.endTime, element.endDate, changeDateIntoMinutes);

      if (isOverlapping(bookStartTimeInMinutes, bookEndTimeInMinutes, elementStartTimeInMinutes, elementEndTimeInMinutes)) {
        return {
          opp: false,
          elementStartTime: element.startTime,
          elementStartDate: element.startDate,
          elementEndTime: element.endTime,
          elementEndDate: element.endDate,
        };
      }
    }

    return {
      opp: true,
      elementStartTime: false,
      elementStartDate: false,
      elementEndTime: false,
      elementEndDate: false,
    };
  } catch (error) {
    console.error("Error checking availability:", error);
    return {
      opp: false,
      elementStartTime: false,
      elementStartDate: false,
      elementEndTime: false,
      elementEndDate: false,
    };
  }
};

const convertToMinutes = (time, date, changeDateIntoMinutes) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes + changeDateIntoMinutes(date);
};

const isOverlapping = (start1, end1, start2, end2) => {
  return (
    (start1 >= start2 && start1 <= end2) ||
    (end1 >= start2 && end1 <= end2) ||
    (start1 <= start2 && end1 >= end2) ||
    (start1 >= start2 && end1 <= end2)
  );
};

export default checkAvailability;