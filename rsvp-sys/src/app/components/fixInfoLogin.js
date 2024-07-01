const fixInfo = (data) => {
  return {
    email: data.email.trim().toLowerCase(),
    password: data.password, // Assuming no changes needed for password
  };
};
export default fixInfo;
