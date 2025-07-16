import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalDetails } from '../redux/onboardingSlice';
import FormNavigation from './FormNavigation.jsx';

const FormStep1 = ({ next }) => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector(state => state.onboarding);
  const [form, setForm] = useState({ firstName, lastName });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = form.firstName.trim() !== '' && form.lastName.trim() !== '';

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      dispatch(setPersonalDetails(form));
      next();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input name="firstName" value={form.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input name="lastName" value={form.lastName} onChange={handleChange} required />
      </label>
      <FormNavigation isFirstStep={true} isLastStep={false} disabled={!isValid} />
    </form>
  );
};

export default FormStep1;