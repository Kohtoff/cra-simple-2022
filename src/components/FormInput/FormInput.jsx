import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { capitalize } from '../../utils/capitalize';
import { useForm, useFormState } from 'react-hook-form';


export default function FormInput({ item }) {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });
  const { errors } = useFormState({ control });

  const onValid = (data) => console.log(data);
  return (
    <Controller
      key={item.name}
      control={control}
      name={item.name}
      rules={item.validators}
      onSubmit={handleSubmit(onValid)}
      render={({ field }) => (
        <TextField
          variant="standard"
          onChange={(e) => field.onChange(e)}
          label={capitalize(item.name)}
          value={field.value}
          error={!!errors[item.name]?.message}
          helperText={errors?.[item.name]?.message}
        />
      )}
    />
  );
}
