const calculateEndTime = (startTime, startDate, stayLength) => {
  console.log(4, startTime, startDate, stayLength);
  startTime =
    parseInt(startTime.split(":")[0]) * 60 + parseInt(startTime.split(":")[1]);

  const totalMinutes = startTime + stayLength;

  if (totalMinutes <= 1440) {
    const hour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minute = String(totalMinutes % 60).padStart(2, "0");
    return { endTime: `${hour}:${minute}`, endDate: startDate };
  } else {
    const excessMinutes = totalMinutes - 1440;
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);

    const hour = String(Math.floor(excessMinutes / 60)).padStart(2, "0");
    const minute = String(excessMinutes % 60).padStart(2, "0");
    return {
      endTime: `${hour}:${minute}`,
      endDate: String(endDate.toISOString().slice(0, 10)),
    };
  }
};

export default calculateEndTime;
