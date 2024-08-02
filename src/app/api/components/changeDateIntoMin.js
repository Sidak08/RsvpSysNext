export default changeDateIntoMinutes = (date) => {
  const year = parseInt(date.split("-")[0] * 365 * 24 * 60);
  const month = parseInt(date.split("-")[1] * 30 * 24 * 60);
  const day = parseInt(date.split("-")[2] * 24 * 60);
  return year + month + day;
};
