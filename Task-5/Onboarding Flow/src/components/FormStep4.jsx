import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExperienceDetails } from '../redux/onboardingSlice';
import FormNavigation from './FormNavigation.jsx';

const FormStep4 = ({ next, prev }) => {
  const dispatch = useDispatch();
  const { company, years } = useSelector(state => state.onboarding);
  const [form, setForm] = useState({ company, years });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = form.company.trim() !== '' && form.years.trim() !== '';

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      dispatch(setExperienceDetails(form));
      next();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <input name="company" value={form.company} onChange={handleChange} required />
      </label>
      <label>
        Years:
        <input name="years" value={form.years} onChange={handleChange} required />
      </label>
      <FormNavigation onBack={prev} isFirstStep={false} isLastStep={false} disabled={!isValid} />
    </form>
  );
};

export default FormStep4;
