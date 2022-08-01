import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Typography,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from '@mui/material';

export default function OrderClientInfo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const FormRow = (props) => {
    const { data } = props;
    const elementID = data.name+'-input';

    const validators = {
      telephone: {
        required: "We need your number to notify about status of your order",
        pattern: {
          value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          message: 'Uncorrect format'
        },
        minLength: {
          value: 5,
          message: 'We think that telephone number must contains at least 5 symbols'
        },
        maxLength: {
          value: 15,
          message: 'Are you sure that your have such a looong number?'
        }
      },
      email:{
        pattern: {
          value: /^\S+@\S+$/i,
          message: 'Uncorrect format'
        },
      }
    }
    return (
      <>
        <FormControl variant="standard">
          <InputLabel htmlFor={elementID}>{data.name}</InputLabel>
          <Input
            error={errors?.[data.name]}
            id={elementID}
            {...register(data.name, validators[data.name])}
            aria-describedby={elementID+"-helper-text"}>
            {data.name}
          </Input>
          {errors?.[data.name] && <FormHelperText sx={{color: 'red'}} id="helper-text">{errors?.[data.name]?.message || 'Something wrong!'}</FormHelperText>}
        </FormControl>
      </>
    );
  };

  const personalInfoRows = [{name: 'telephone'}, {name: 'email'}, {name: 'fullname'}]

  return (
    <div>
      <Typography variant="h2">Checkout</Typography>
      <Divider />
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '50%', gap: '20px'}}>
          <Typography variant="h4">Personal info</Typography>
          {personalInfoRows.map((item, index) => <FormRow key={index} data={item}/>)}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: 'unset',
            background: '#221d23',
            color: 'white',
            mt: '10px',
            '&:hover': { backgroundColor: 'red' },
          }}>
          Submit
        </Button>
      </Box>
    </div>
  );
}
