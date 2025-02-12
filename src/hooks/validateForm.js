export const validateForm = (data) => {
  let errors = {};
  if (!data.fname) errors.fname = "First name is required";
  if (!data.lname) errors.lname = "Last name is required";
  if (!data.phoneNumber) errors.phoneNumber = "Phone number is required";
  if (!data.email) errors.email = "Email is required";

  return errors;
};
