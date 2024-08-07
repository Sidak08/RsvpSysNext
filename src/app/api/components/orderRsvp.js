const orderRsvp = (upComingReservations) => {
  // console.log(1, upComingReservations);
  if (upComingReservations.length > 1) {
    const activeReservation = upComingReservations;
    const lastReservationIndex = activeReservation.length - 1;
    const lastReservation = activeReservation[lastReservationIndex];
    // console.log(2, lastReservation);
    const lastReservationStartTime =
      parseInt(lastReservation.startTime.split(":")[0]) * 60 +
      parseInt(lastReservation.startTime.split(":")[1]);
    const lastReservationStartDate = new Date(lastReservation.startDate);
    // console.log(3);

    for (let i = 0; i < lastReservationIndex; i++) {
      const currentReservationStartTime =
        parseInt(activeReservation[i].startTime.split(":")[0]) * 60 +
        parseInt(activeReservation[i].startTime.split(":")[1]);
      const currentReservationStartDate = new Date(
        activeReservation[i].startDate,
      );

      if (
        lastReservationStartDate <= currentReservationStartDate &&
        lastReservationStartTime <= currentReservationStartTime
      ) {
        // Insert the last reservation at the correct position
        activeReservation.splice(i, 0, lastReservation);
        // Remove the duplicate last reservation
        activeReservation.splice(lastReservationIndex + 1, 1);
        // Trigger re-render by toggling the forceRerender state
        // setForceRerender(forceRerender + 1); lol i have no clue why this suddenly broke but it seems unseary now
        upComingReservations = activeReservation;
        break; // Exit the loop after inserting the reservation
      }
    }
  }
  return upComingReservations;
};
export default orderRsvp;
