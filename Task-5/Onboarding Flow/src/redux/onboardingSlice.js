// src/redux/onboardingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  degree: '',
  institution: '',
  company: '',
  years: '',
  username: '',
  password: '',
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setPersonalDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setContactDetails: (state, action) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    setEducationDetails: (state, action) => {
      state.degree = action.payload.degree;
      state.institution = action.payload.institution;
    },
    setExperienceDetails: (state, action) => {
      state.company = action.payload.company;
      state.years = action.payload.years;
    },
    setAccountDetails: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const {
  setPersonalDetails,
  setContactDetails,
  setEducationDetails,
  setExperienceDetails,
  setAccountDetails,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
