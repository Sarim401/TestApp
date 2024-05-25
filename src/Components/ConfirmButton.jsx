import React from 'react';
import './ConfirmButton.css'; // Zaimportuj plik stylów CSS

const ConfirmButton = ({ buttonText }) => {
  return (
    <button type="submit" className="submit-button">
      {buttonText}
    </button>
  );
};

export default ConfirmButton;
