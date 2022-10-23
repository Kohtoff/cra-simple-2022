import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../ducks/order.duck';
import { Button, Divider } from '@mui/material';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export default function OrderControllers(props) {
  const { disabledNextStep, disabledPrevStep, isLastStep } = props;
  const cart = useCart();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStepHandler = () => dispatch(nextStep());
  const prevStepHandler = () => dispatch(prevStep());
  const finishOrder = () => navigate('/catalog')
  return (
    <>
      <Divider sx={{ mt: '50px', mb: '20px' }} />
      <Button
        variant="contained"
        onClick={ isLastStep ? finishOrder : nextStepHandler}
        fullWidth
        disabled={(cart.cartArray.length > 0 ? false : true) || disabledNextStep}
        sx={{ borderRadius: 'unset', background: '#245462' }}>
        {isLastStep ? 'Finish Order' : 'Next Step'}
      </Button>
      <Button
        variant="contained"
        onClick={prevStepHandler}
        fullWidth
        disabled={(cart.cartArray.length > 0 ? false : true) || disabledPrevStep}
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
