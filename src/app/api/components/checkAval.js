const checkAvailability = (
  bookTime,
  bookDate,
  bookEndTime,
  bookEndDate,
  changeDateIntoMinutes,
  rsvpAry,
) => {
  bookTime =
    parseInt(bookTime.split(":")[0]) * 60 +
    parseInt(bookTime.split(":")[1]) +
    changeDateIntoMinutes(bookDate);
  bookEndTime =
    parseInt(bookEndTime.split(":")[0]) * 60 +
    parseInt(bookEndTime.split(":")[1]) +
    changeDateIntoMinutes(bookEndDate);

  const tmpRsvpList = rsvpAry;

  for (let i = 0; i < tmpRsvpList.length; i++) {
    const element = tmpRsvpList[i];
    const elementStartTime =
      parseInt(element.startTime.split(":")[0]) * 60 +
      parseInt(element.startTime.split(":")[1]) +
      changeDateIntoMinutes(element.startDate);
    const elementEndTime =
      parseInt(element.endTime.split(":")[0]) * 60 +
      parseInt(element.endTime.split(":")[1]) +
      changeDateIntoMinutes(element.endDate);
    if (
      (bookTime >= elementStartTime && bookTime <= elementEndTime) ||
      (bookEndTime >= elementStartTime && bookEndTime <= elementEndTime)
    ) {
      return {
        opp: false,
        startTime: elementStartTime,
        endTime: elementEndTime,
      };
    }
  }
  return true;
};
