import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useOrder } from '../../hooks/useOrder';

export default function OrderStepper() {
  const order = useOrder();
  console.log(order);
  return <Stepper activeStep={order.currentStep}>
    {
      order.steps.map(step => <Step key={step.id}>
        <StepLabel>{step.name}</StepLabel>
      </Step>)
    }
  </Stepper>;
}
