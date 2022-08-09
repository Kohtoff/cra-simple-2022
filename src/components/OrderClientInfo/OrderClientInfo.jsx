import React, { useMemo } from 'react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { formStruct } from '../../data';
import FormSection from '../FormSection/FormSection';
import { useOrder } from '../../hooks/useOrder';

export default function OrderClientInfo(props) {
  const { validation } = props;
  const {
    register,
    formState: { errors },
  } = validation;

  const { customerData } = useOrder();

  const extendedData = useMemo(() => {
    const result = {};
    for (let key in formStruct) {
      result[key] = {
        ...formStruct[key],
        fields: formStruct[key].fields.map((item, index) => {
          return Array.isArray(item)
            ? item.map((subItem) => ({ ...subItem, savedData: customerData[subItem.name] }))
            : (formStruct[key].fields[index] = { ...item, savedData: customerData[item.name] });
        }),
      };
    }
    return result;
  }, [customerData]);

  return (
    <div>
      <Typography variant="h2">Checkout</Typography>
      <Divider />
      <Box component={'form'}>
        <FormSection
          data={
            Object.keys(customerData).length > 0
              ? extendedData.personalInfo
              : formStruct.personalInfo
          }
          validation={{ errors, register }}
        />
        <FormSection
          data={Object.keys(customerData).length > 0 ? extendedData.delivery : formStruct.delivery}
          validation={{ errors, register }}
        />
      </Box>
    </div>
  );
}
