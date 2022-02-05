import React, { useState } from 'react';
import { Rating } from '@mui/material';

export default function RatingSlider(props) {
    const {readOnly, value} = props;
    const [rating, setRating] = useState(value)
  return <div>
      <Rating value={rating} onChange={(event, newRating) => setRating(newRating)} readOnly={readOnly} />
  </div>;
}
