function phoneReg(phone) {
  const phonePattern =
    /^(\+?\d{1,3}[-.\s]?|\(\d{1,3}\)[-\.\s]?)?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;

  return phonePattern.test(phone);
}
export default phoneReg;
