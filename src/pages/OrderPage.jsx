import React from 'react';
import OrderClientInfo from '../components/OrderClientInfo/OrderClientInfo';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation';
import OrderFinish from '../components/OrderFinish/OrderFinish';
import OrderProducts from '../components/OrderProducts/OrderProducts';
import OrderStepper from '../components/OrderStepper/OrderStepper';
import { useOrder } from '../hooks/useOrder';
import OrderControllers from '../components/OrderControllers/OrderControllers';
import { Typography } from '@mui/material';

export default function OrderPage() {
  const { currentStep, customerData } = useOrder();

  const stepSwitch = {
    0: <OrderProducts />,
    1: <OrderClientInfo />,
    2: <OrderConfirmation />,
    3: <OrderFinish />,
  };

  const StepBlock = () => stepSwitch[currentStep];

  console.log(Object.entries(customerData), (currentStep === 1 && !(Object.entries(customerData).length > 9)))

  return (
    <div>
      <Typography variant="h2" textAlign={'center'}>
        Checkout
      </Typography>

      <OrderStepper />
      <StepBlock />
      <OrderControllers isLastStep={currentStep === 3} disabledNextStep={(currentStep === 1 && !(Object.entries(customerData).length > 9))} disabledPrevStep={currentStep === 3}/>
    </div>
  );
}
