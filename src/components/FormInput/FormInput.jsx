import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { capitalize } from '../../utils/capitalize';
import { useOrder } from '../../hooks/useOrder';

export default function FormInput({ item, validation }) {
  const {errors, control, handleSubmit} = validation;
  const {customerData} = useOrder()


  const onValid = (data) => {console.log(data)};
  return (
    <Controller
      key={item.name}
      control={control}
      name={item.name}
      rules={item.validators}
      onChange={handleSubmit(onValid, onValid)}
      defaultValue={customerData && customerData[item.name]}
      render={({ field }) => (
        <TextField
          variant="standard"
          onChange={(e) => field.onChange(e.target.value)}
          label={capitalize(item.name)}
          value={field.value}
          error={!!errors[item.name]?.message}
          helperText={errors?.[item.name]?.message}

          />
      )}
    />
  );
}
