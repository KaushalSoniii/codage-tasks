// src/App.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Stepper from './components/Stepper';
import FormStep1 from './components/FormStep1';
import FormStep2 from './components/FormStep2';
import FormStep3 from './components/FormStep3';
import FormStep4 from './components/FormStep4';
import FormStep5 from './components/FormStep5';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const App = () => {
  const [step, setStep] = useState(1);
  const onboarding = useSelector(state => state.onboarding);

  // Validation for each step
  const stepValid = [
    onboarding.firstName.trim() !== '' && onboarding.lastName.trim() !== '',
    onboarding.phone.trim() !== '' && emailRegex.test(onboarding.email),
    onboarding.degree?.trim() !== '' && onboarding.institution?.trim() !== '',
    onboarding.company?.trim() !== '' && onboarding.years?.trim() !== '',
    onboarding.username?.trim() !== '' && onboarding.password?.trim() !== '',
  ];

  // Only allow navigation to a step if all previous steps are valid
  const canNavigateToStep = (targetStep) => {
    if (targetStep <= step) return true;
    for (let i = 0; i < targetStep - 1; i++) {
      if (!stepValid[i]) return false;
    }
    return true;
  };

  const renderStep = () => {
    switch (step) {
      case 1: return <FormStep1 next={() => setStep(2)} />;
      case 2: return <FormStep2 next={() => setStep(3)} prev={() => setStep(1)} />;
      case 3: return <FormStep3 next={() => setStep(4)} prev={() => setStep(2)} />;
      case 4: return <FormStep4 next={() => setStep(5)} prev={() => setStep(3)} />;
      case 5: return <FormStep5 prev={() => setStep(4)} finish={() => setStep(6)} />;
      case 6: return (
        <div>
          <h2>Summary</h2>
          <ul>
            <li>First Name: {onboarding.firstName}</li>
            <li>Last Name: {onboarding.lastName}</li>
            <li>Phone: {onboarding.phone}</li>
            <li>Email: {onboarding.email}</li>
            <li>Degree: {onboarding.degree}</li>
            <li>Institution: {onboarding.institution}</li>
            <li>Company: {onboarding.company}</li>
            <li>Years: {onboarding.years}</li>
            <li>Username: {onboarding.username}</li>
          </ul>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="container">
      <Stepper currentStep={step} setStep={setStep} canNavigateToStep={canNavigateToStep} />
      {renderStep()}
    </div>
  );
};

export default App;
