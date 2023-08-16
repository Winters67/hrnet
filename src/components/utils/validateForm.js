const validateForm = (state) => {
  let errors = {};

  // Valider le prénom
  if (!state.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  // Valider le nom de famille
  if (!state.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  // Valider la date de naissance
  if (!state.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required";
  } else if (isNaN(Date.parse(state.dateOfBirth))) {
    errors.dateOfBirth = "Date of birth is not a valid date";
  }

  // Valider la date de début
  if (!state.startDate) {
    errors.startDate = "Start date is required";
  } else if (isNaN(Date.parse(state.startDate))) {
    errors.startDate = "Start date is not a valid date";
  }

  // Valider la rue
  if (!state.street.trim()) {
    errors.street = "Street is required";
  }

  // Valider la ville
  if (!state.city.trim()) {
    errors.city = "City is required";
  }

  // Valider le code postal
  if (!state.zipCode.trim()) {
    errors.zipCode = "Zip Code is required";
  } else if (!/^\d{5}$/.test(state.zipCode)) {
    errors.zipCode = "Zip Code must be a 5-digit number";
  }

  return errors;
};

export default validateForm;
