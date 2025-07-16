import React from 'react';

const Stepper = ({ currentStep, setStep, canNavigateToStep }) => {
  const steps = ['Personal', 'Contact', 'Education', 'Experience', 'Summary'];

  return (
    <div className="stepper">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`step ${currentStep === index + 1 ? 'active' : ''}`}
          onClick={() => {
            if (canNavigateToStep(index + 1)) setStep(index + 1);
          }}
          style={{ cursor: canNavigateToStep(index + 1) ? 'pointer' : 'not-allowed' }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Stepper;