import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEducationDetails } from '../redux/onboardingSlice';
import FormNavigation from './FormNavigation.jsx';

const FormStep3 = ({ next, prev }) => {
  const dispatch = useDispatch();
  const { degree, institution } = useSelector(state => state.onboarding);
  const [form, setForm] = useState({ degree, institution });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = form.degree.trim() !== '' && form.institution.trim() !== '';

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      dispatch(setEducationDetails(form));
      next();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Degree:
        <input name="degree" value={form.degree} onChange={handleChange} required />
      </label>
      <label>
        Institution:
        <input name="institution" value={form.institution} onChange={handleChange} required />
      </label>
      <FormNavigation onBack={prev} isFirstStep={false} isLastStep={false} disabled={!isValid} />
    </form>
  );
};

export default FormStep3;
