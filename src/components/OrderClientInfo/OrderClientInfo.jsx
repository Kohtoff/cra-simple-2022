import React from 'react';
import { Box } from '@mui/material';
import FormSection from '../FormSection/FormSection'
import { formStruct } from '../../data';
import FormOptions from '../FormOptions/FormOptions';

export default function OrderClientInfo() {

  return (
    <Box component={'form'}>
        <FormSection data={formStruct.personalInfo} />
        <FormSection data={formStruct.delivery} />
        <FormOptions data={formStruct.deliveryOption}/>
        <FormOptions data={formStruct.paymentOption} />
    </Box>
  );
}
