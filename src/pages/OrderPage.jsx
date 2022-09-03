import React, {createContext} from 'react';
import OrderClientInfo from '../components/OrderClientInfo/OrderClientInfo';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation';
import OrderFinish from '../components/OrderFinish/OrderFinish';
import OrderProducts from '../components/OrderProducts/OrderProducts';
import OrderStepper from '../components/OrderStepper/OrderStepper';
import { useOrder } from '../hooks/useOrder';
import OrderControllers from '../components/OrderControllers/OrderControllers';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserData } from '../ducks/order.duck';
export const ValidationContext = createContext();


// export default function OrderPage() {
//   const { currentStep } = useOrder();
//   const { handleSubmit, reset, setValue, control } = useForm();

//   const stepSwithcer = {
//     0: <OrderProducts />,
//     1: <OrderClientInfo />,
//     2: <OrderConfirmation />,
//     3: <OrderFinish />,
//   };

//   const StepBlock = () => stepSwithcer[currentStep];

//   return (
//     <>
//       <Typography variant="h2" textAlign={'center'}>
//         Checkout
//       </Typography>
//       <OrderStepper />
//       <ValidationContext.Provider value={{ handleSubmit, reset, setValue, control }}>
//         <StepBlock />
//         <OrderControllers />
//       </ValidationContext.Provider>
//     </>
//   );
// }

export default function OrderPage() {
  const { currentStep } = useOrder();
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    getValues,
    control,
  } = useForm({ mode: 'onBlur'  });
  const dispatch = useDispatch();

  const SaveData = () => {
    handleSubmit(dispatch(setUserData(getValues())));
  };

  const stepSwitch = {
    0: <OrderProducts />,
    1: (
      <OrderClientInfo
        validation={{ register, formState: { errors }, handleSubmit, getValues,
        control
       }}
      />
    ),
    2: <OrderConfirmation />,
    3: <OrderFinish />,
  };

  const StepBlock = () => stepSwitch[currentStep];

  return (
    <div>
      <Typography variant="h2" textAlign={'center'}>Checkout</Typography>

      <OrderStepper />
      <StepBlock />
      <OrderControllers
        onClick={() => {
          currentStep === 1 && SaveData();
        }}
        disabled={currentStep === 1 && (!isDirty || !isValid)}
      />
    </div>
  );
}
