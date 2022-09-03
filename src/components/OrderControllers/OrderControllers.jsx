import React, {useContext}  from 'react';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../ducks/order.duck';
import { Button, Divider } from '@mui/material';
import { useCart } from '../../hooks/useCart';
import { useOrder } from '../../hooks/useOrder';
import { ValidationContext } from '../../pages/OrderPage';

export default function OrderControllers(props) {
  const { disabled, onClick } = props;
  const cart = useCart();
  const order = useOrder()
  const dispatch = useDispatch();
  const validationContext = useContext(ValidationContext)

  const nextStepHandler = () =>{
    if(order.currentStep === 1){
      validationContext.handleSubmit()
      return;
    }
     dispatch(nextStep())
    };
  const prevStepHandler = () => dispatch(prevStep());
  return (
    <>
      <Divider sx={{ mt: '50px', mb: '20px' }} />
      <Button
        variant="contained"
        onClick={() => {
          nextStepHandler()
        }}
        fullWidth
        disabled={(cart.cartArray.length > 0 ? false : true) || disabled}
        sx={{ borderRadius: 'unset', background: '#245462' }}>
        Next Step
      </Button>
      <Button
        variant="contained"
        onClick={() => prevStepHandler()}
        fullWidth
        disabled={cart.cartArray.length > 0 ? false : true}
        sx={{
          borderRadius: 'unset',
          background: '#221d23',
          color: 'white',
          mt: '10px',
          '&:hover': { backgroundColor: 'red' },
        }}>
        Prev Step
      </Button>
    </>
  );
}
