const fixInfo = (data) => {
  return {
    email: data.email.trim().toLowerCase(),
    password: data.password, // Assuming no changes needed for password
    id: data.id, // Assuming no changes needed for id
    firstName: data.firstName.trim().toLowerCase(),
    lastName: data.lastName.trim().toLowerCase(),
    phone: data.phone.trim(), // Remove any extra spaces from phone number
  };
};
export default fixInfo;
