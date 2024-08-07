function phoneReg(phone) {
  // Define the regex pattern for a valid phone number
  // This pattern matches phone numbers in various formats, such as:
  // (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, +3(123) 456-7890
  const phonePattern =
    /^(\+?\d{1,3}[-.\s]?|\(\d{1,3}\)[-\.\s]?)?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;

  // Test the phone string against the pattern
  return phonePattern.test(phone);
}
export default phoneReg;
