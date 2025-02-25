import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import FormInput from '../FormInput/FormInput';


export default function FormSection({ data, validation }) {
  const {control, handleSubmit, errors} = validation
  return (
    <>
      <Box sx={{ mt: '10px', maxWidth: '50%' }}>
        <Typography sx={{ mb: '40px' }} variant="h4">
          {data.title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {data.fields.map((item, index) => {
            return Array.isArray(item) ? (
              <Box key={index}>
                {item.map((item) => (
                  <FormInput validation={{control, handleSubmit, errors}} key={item.name} item={item} />
                ))}
              </Box>
            ) : (
              <FormInput validation={{control, handleSubmit, errors}} key={item.name} item={item} />
            );
          })}
        </Box>
      </Box>
      <Divider sx={{ mt: '20px' }} />
    </>
  );
}
