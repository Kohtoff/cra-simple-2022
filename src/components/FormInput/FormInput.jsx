import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { capitalize } from '../../utils/capitalize';

export default function FormInput(props) {
  const {item, register, errors, sx} = props;
  const itemId = item.name + '-input';
  const labelColor =errors?.[item.name] ? 'error' : 'primary'
  return (
    <>
      <FormControl sx={sx}>
        <InputLabel htmlFor={itemId} color={labelColor}>{capitalize(item.name)}</InputLabel>
        <Input
          error={!!(errors?.[item.name])}
          id={itemId}
          {...register(item.name, item.validators)}
          aria-describedby={itemId + '-helper-text'}>
          {item.name}
        </Input>
        {errors?.[item.name] && (
          <FormHelperText sx={{ color: 'red' }} id="helper-text">
            {errors?.[item.name]?.message || 'Something wrong!'}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}
