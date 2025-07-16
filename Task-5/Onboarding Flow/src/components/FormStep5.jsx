import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountDetails } from '../redux/onboardingSlice';
import FormNavigation from './FormNavigation.jsx';

const FormStep5 = ({ prev, finish }) => {
  const dispatch = useDispatch();
  const { username, password } = useSelector(state => state.onboarding);
  const [form, setForm] = useState({ username, password });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = form.username.trim() !== '' && form.password.trim() !== '';

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      dispatch(setAccountDetails(form));
      finish();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" value={form.username} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
      </label>
      <FormNavigation onBack={prev} isFirstStep={false} isLastStep={true} disabled={!isValid} />
    </form>
  );
};

export default FormStep5;