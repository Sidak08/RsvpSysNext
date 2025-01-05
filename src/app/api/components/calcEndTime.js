const calculateEndTime = (startTime, startDate, stayLength) => {
  try {
    const startTimeInMinutes = convertTimeToMinutes(startTime);
    const totalMinutes = startTimeInMinutes + stayLength;

    if (totalMinutes <= 1440) {
      return formatEndTime(totalMinutes, startDate);
    } else {
      const excessMinutes = totalMinutes - 1440;
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);
      return formatEndTime(excessMinutes, endDate.toISOString().slice(0, 10));
    }
  } catch (error) {
    console.error("Error calculating end time:", error);
    return { endTime: "00:00", endDate: startDate };
  }
};

const convertTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const formatEndTime = (totalMinutes, endDate) => {
  const hour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minute = String(totalMinutes % 60).padStart(2, "0");
  return { endTime: `${hour}:${minute}`, endDate };
};

export default calculateEndTime;