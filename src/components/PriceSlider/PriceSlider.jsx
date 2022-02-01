import React from "react";
import {Slider, Typography, Container} from '@mui/material';

export default function PriceSlider() {

    const [value, setValue] = React.useState([1, 25]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "K";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num < 900) {
      return num;
    }
  }
  return (
    <Container>
      <Slider
        style={{ maxWidth: 500 }}
        value={value}
        min={0}
        step={1}
        max={200}
        valueLabelFormat={numFormatter}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Typography>Values: {value}</Typography>
    </Container>
  );
}
