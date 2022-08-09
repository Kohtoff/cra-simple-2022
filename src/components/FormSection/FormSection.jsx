import React from 'react';
import FormInput from '../FormInput/FormInput';
import FormBox from '../FormBox/FormBox';
import { Box } from '@mui/material';

export default function FormSection(props) {
  const {
    data,
    validation: { register, errors },
  } = props;

  return (
    <FormBox data={data}>
      {data.fields.map((item, index) =>
        Array.isArray(item) ? (
          <Box key={index} sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
            {item.map((item) => (
              <FormInput
                sx={{ width: '50%' }}
                key={item.name}
                item={item}
                register={register}
                errors={errors}
                name={item.name}
                defaultValue={item.savedData}
              />
            ))}
          </Box>
        ) : (
          <FormInput
            item={item}
            name={item.name}
            key={item.name}
            register={register}
            errors={errors}
            defaultValue={item.savedData}
          />
        ),
      )}
    </FormBox>
  );
}
