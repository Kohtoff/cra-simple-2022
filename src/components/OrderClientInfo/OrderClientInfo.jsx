import React from 'react';
import { Box } from '@mui/material';
import FormSection from '../FormSection/FormSection';
import { formStruct } from '../../data';
import FormOptions from '../FormOptions/FormOptions';
import { useForm, useFormState } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../ducks/order.duck';

export default function OrderClientInfo() {
  const { control, handleSubmit, getValues } = useForm({ mode: 'onChange' });
  const { errors, isDirty, isValid } = useFormState({ control });

  const dispatch = useDispatch();

  const saveData = () => {
    console.log(isValid, isDirty, errors);
    if (isValid && isDirty) {
      dispatch(setUserData(getValues()));
    }
  };

  return (
    <Box component={'form'} onChange={handleSubmit(saveData)}>
      <FormSection validation={{ control, errors, handleSubmit }} data={formStruct.personalInfo} />
      <FormSection validation={{ control, errors, handleSubmit }} data={formStruct.delivery} />
      <FormOptions validation={{control, errors, handleSubmit}} data={formStruct.deliveryOption} />
      <FormOptions validation={{control, errors, handleSubmit}} data={formStruct.paymentOption} />
    </Box>
  );
}
