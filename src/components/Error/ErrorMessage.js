import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.scss";

function ErrorMessage({ errors, field }) {
  // Vérifie si l'objet `errors` contient une erreur pour ce champ spécifique
  if (errors && errors[field]) {
    return (
      <div className="error-messages">
        <p>{errors[field]}</p>
      </div>
    );
  }

  // Si il n'y a pas d'erreur pour ce champ, retourne null pour ne rien rendre
  return null;
}

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
};

export default ErrorMessage;
