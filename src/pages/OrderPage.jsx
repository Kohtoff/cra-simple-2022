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

  console.log(customerData);

  return (
    <div>
      <Typography variant="h2" textAlign={'center'}>
        Checkout
      </Typography>

      <OrderStepper />
      <StepBlock />
      <OrderControllers
        disabled={currentStep === 1 && !customerData}
      />
    </div>
  );
}
