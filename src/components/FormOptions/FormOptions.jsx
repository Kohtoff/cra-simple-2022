import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { capitalize } from '../../utils/capitalize';
import FormBox from '../FormBox/FormBox';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';


export default function FormOptions(props) {
  const { data } = props;
  const { control } = useForm({ mode: 'onChange' });
  const [optionValue, selectOption] = useState(data.fields[0].name);

  return (
    <FormBox data={data}>
      <FormControl sx={{ width: '100%' }}>
        <Controller
          control={control}
          name={data.title}
          render={({ field }) => {
            return (
              <RadioGroup
                {...field}
                sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                value={optionValue}
                onChange={(e) => selectOption(e.currentTarget.value)}>
                {data.fields.map((option, index) => (
                  <FormControlLabel
                    sx={{
                      width: '100%',
                      height: '60px',
                      transition: '.2s all ease-in',
                      border: '1px solid #e4e4e4',
                      ...(optionValue === option.name && {
                        backgroundColor: 'black',
                        color: 'white',
                        borderColor: '#fff',
                      }),
                    }}
                    value={option.name}
                    control={<Radio color={'secondary'} />}
                    key={index}
                    label={capitalize(option.name)}
                  />
                ))}
              </RadioGroup>
            );
          }}></Controller>
      </FormControl>
    </FormBox>
  );
}
