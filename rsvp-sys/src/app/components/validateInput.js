const validateInputs = (input) => {
  const errors = {};

  if (!input.email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Email is invalid.";
  }

  if (!input.password) {
    errors.password = "Password is required.";
  } else if (
    input.password.length < 8 ||
    !/[A-Z]/.test(input.password) || // At least one uppercase letter
    !/[!@#$%^&*(),.?":{}|<>]/.test(input.password) // At least one special character
  ) {
    errors.password =
      "Password must be at least 8 characters long, include at least one uppercase letter, and one special character.";
  }

  if (typeof input.id !== "number" || isNaN(input.id) || input.id <= 0) {
    errors.id = "ID must be a positive number.";
  }

  if (!input.firstName) {
    errors.firstName = "First name is required.";
  } else if (!/^[a-zA-Z]+$/.test(input.firstName)) {
    errors.firstName = "First name must contain only letters.";
  }

  if (!input.lastName) {
    errors.lastName = "Last name is required.";
  } else if (!/^[a-zA-Z]+$/.test(input.lastName)) {
    errors.lastName = "Last name must contain only letters.";
  }

  if (!input.phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[0-9\s-]+$/.test(input.phone)) {
    errors.phone = "Phone number is invalid.";
  }

  return errors;
};

export default validateInputs;
