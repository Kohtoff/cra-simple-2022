import React, { useContext } from 'react';
import OrderClientInfo from '../components/OrderClientInfo/OrderClientInfo';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation';
import OrderFinish from '../components/OrderFinish/OrderFinish';
import OrderProducts from '../components/OrderProducts/OrderProducts';
import OrderStepper from '../components/OrderStepper/OrderStepper';
import { useOrder } from '../hooks/useOrder';
import OrderControllers from '../components/OrderControllers/OrderControllers';
import { useForm } from 'react-hook-form';

export default function OrderPage() {
  const order = useOrder();
  const { currentStep } = order;
  const {
    register,
    formState: {isValidating, errors},
    handleSubmit,
  } = useForm({ mode: 'onBlur' });


  const stepSwitch = {
    0: <OrderProducts />,
    1: <OrderClientInfo validation={{ register, formState: { errors }, handleSubmit }} />,
    2: <OrderConfirmation />,
    3: <OrderFinish />,
  };

  const StepBlock = () => stepSwitch[currentStep];


  return (
    <div>
      <OrderStepper />
      <StepBlock />
      <OrderControllers />
    </div>
  );
}
