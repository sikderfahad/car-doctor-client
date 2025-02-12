// Universal Form Validation Function
export const validateBlankForm = (formData, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].toString().trim() === "") {
      errors[field] = `${field.replace(/_/g, " ")} is required.`;
    }
  });

  return errors;
};

// Facility Validation Helper
export const isFacilityValid = (facility) => {
  return facility.name.trim() !== "" && facility.details.trim() !== "";
};
