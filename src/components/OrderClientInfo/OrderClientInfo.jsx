import React from 'react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FormInput from '../FormInput/FormInput';
import { formStruct } from '../../data';
import FormRow from '../FormRow/FormRow';

export default function OrderClientInfo(props) {
  const { validation } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = validation;

  return (
    <div>
      <Typography variant="h2">Checkout</Typography>
      <Divider />
      <Box component={'form'} onSubmit={() => handleSubmit()}>
        <FormRow data={formStruct.personalInfo}>
          {formStruct.personalInfo.fields.map((item) => (
            <FormInput item={item} key={item.name} register={register} errors={errors} />
          ))}
        </FormRow>
        <FormRow data={formStruct.delivery}>
          {formStruct.delivery.fields.map((item, index) =>
            Array.isArray(item) ? (
              <Box
                key={index}
                sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                {item.map((item) => (
                  <FormInput
                    sx={{ width: '50%' }}
                    key={item.name}
                    item={item}
                    register={register}
                    errors={errors}
                  />
                ))}
              </Box>
            ) : (
              <FormInput item={item} key={item.name} register={register} errors={errors} />
            ),
          )}
        </FormRow>
      </Box>
    </div>
  );
}
