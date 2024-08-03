// NEEDS TO BE FIXED SLIGHT ISSUE WHEN THE LEN FOR ALL RESERVATIONS ARE NOT SAME also fix the issue in the other file.
// it was fixed in both files :)
const checkAvailability = (
  bookTime,
  bookDate,
  bookEndTime,
  bookEndDate,
  changeDateIntoMinutes,
  rsvpAry,
) => {
  // console.log(1, bookDate, bookEndDate);
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
    // console.log(2, [i], bookDate, bookEndDate);
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
      (bookEndTime >= elementStartTime && bookEndTime <= elementEndTime) ||
      (bookTime <= elementStartTime && bookEndTime >= elementEndTime) ||
      (bookTime >= elementStartTime && bookEndTime <= elementEndTime)
    ) {
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
};
export default checkAvailability;
