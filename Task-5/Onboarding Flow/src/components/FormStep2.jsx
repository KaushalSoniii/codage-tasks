import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContactDetails } from '../redux/onboardingSlice';
import FormNavigation from './FormNavigation.jsx';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormStep2 = ({ next, prev }) => {
  const dispatch = useDispatch();
  const { phone, email } = useSelector(state => state.onboarding);
  const [form, setForm] = useState({ phone, email });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isEmailValid = emailRegex.test(form.email);
  const isValid = form.phone.trim() !== '' && isEmailValid;

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (isValid) {
      dispatch(setContactDetails(form));
      next();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        {submitted && form.phone.trim() === '' && (
          <span style={{ color: 'red', fontSize: '0.9em' }}>Phone is required</span>
        )}
      </label>
      <label>
        Email:
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
        />
        {submitted && form.email.trim() === '' && (
          <span style={{ color: 'red', fontSize: '0.9em' }}>Email is required</span>
        )}
        {submitted && form.email.trim() !== '' && !isEmailValid && (
          <span style={{ color: 'red', fontSize: '0.9em' }}>Enter a valid email address</span>
        )}
      </label>
      <FormNavigation onBack={prev} isFirstStep={false} isLastStep={false} disabled={!isValid} />
    </form>
  );
};

export default FormStep2;
