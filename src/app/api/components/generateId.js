const genrateId = (upComingReservations) => {
  const randomNum = Math.floor(Math.random() * 1000000);
  for (let i = 0; i < upComingReservations.length; i++) {
    if (randomNum === upComingReservations[i].id) {
      genrateId();
    }
  }
  return randomNum;
};

export default genrateId;
