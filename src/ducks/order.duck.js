import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: [
    { id: 0, name: 'Confirm chosen products', done: false },
    { id: 1, name: 'Enter info', done: false },
    { id: 2, name: 'Confirm order', done: false },
    { id: 3, name: 'Finish', done: false },
  ],
  currentStep: 0,
  customerData: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep === state.steps.length - 1
        ? (state.currentStep = state.steps.length - 1)
        : (state.currentStep += 1);
    },

    prevStep: (state) => {
      state.currentStep === 0 ? (state.currentStep = 0) : (state.currentStep -= 1);
    },

    setStep: (state, action) => {
      state.currentStep = action.payload;
    },

    setStepDone: (state, action) => {
      const { stepId } = action.payload;

      state.steps.forEach((step) => {
        if (step.id === stepId) {
          step.done = true;
        }
      });
    },

    setUserData: (state, action) => {
      state.customerData = action.payload;
    },

    resetOrder: (state) => {
      for (let key in state) state[key] = initialState[key];
    },
  },
});

const { reducer, actions } = orderSlice;

export default reducer;

export const { nextStep, prevStep, setStepDone, setStep, setUserData, resetOrder } = actions;

export const selectOrder = (state) => state.order;
