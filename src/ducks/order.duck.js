import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: [
    { id: 0, name: 'Confirm chosen products', done: false },
    { id: 1, name: 'Enter info', done: false },
    { id: 2, name: 'Confirm order', done: false },
    { id: 3, name: 'Finish', done: false },
  ],
  currentStep: 0,
  customerData: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep === state.steps.length - 1
        ? (state.currentStep = state.steps.length - 1)
        : (state.currentStep += 1);
    },

    prevStep(state) {
      state.currentStep === 0 ? (state.currentStep = 0) : (state.currentStep -= 1);
    },

    setStep(state, action) {
        state.currentStep = action.payload;
    },

    setStepDone(state, action) {
      const { stepId } = action.payload;

      state.steps.forEach((step) => {
        if (step.id === stepId) {
          step.done = true;
        }
      });
    },
  },
});

const { reducer, actions } = orderSlice;

export default reducer;

export const { nextStep, prevStep, setStepDone, setStep } = actions;

export const selectOrder = (state) => state.order;
