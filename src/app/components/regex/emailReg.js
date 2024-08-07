function emailReg(email) {
  // Define the regex pattern for a valid email address
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email string against the pattern
  return emailPattern.test(email);
}

export default emailReg;
