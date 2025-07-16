import React from 'react';

const FormNavigation = ({ onBack, isFirstStep, isLastStep, disabled }) => (
  <div className="form-buttons">
    {!isFirstStep && (
      <button type="button" onClick={onBack}>
        Back
      </button>
    )}
    <button type="submit" disabled={disabled}>
      {isLastStep ? 'Finish' : 'Next'}
    </button>
  </div>
);

export default FormNavigation;