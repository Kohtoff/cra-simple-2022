import React from 'react';
import { Box, Typography } from '@mui/material';
import Map from '../components/Map/Map';

export default function AboutPage() {
  return (
    <>
      <Typography variant="h2">About us</Typography>
      <Box border={'1px solid #e4e4e4'} sx={{ mt: '20px', padding: '50px 40px' }}>
        <b>ShopName</b> - is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        quasi reprehenderit enim quis ipsam dolorem maiores. Aliquam rem sequi neque laudantium
        labore vel velit harum ipsum similique, iusto nam accusantium. Dignissimos saepe officia,
        laborum tempora ex magnam, blanditiis temporibus sed repellendus consectetur reiciendis
        veniam consequatur officiis cupiditate optio itaque iure molestiae facilis quas, odio porro
        deserunt a. Dolor atque eligendi culpa cupiditate impedit repellendus minima accusantium
        nostrum sequi saepe. Laudantium nihil amet quidem ipsa. Fugiat consequuntur ipsum aliquam.
      </Box>
      <Map
        location={{
          address: '1600 Amphitheatre Parkway, Mountain View, california.',
          lat: 37.42216,
          lng: -122.08427,
        }}
        zoomLevel={17}></Map>
    </>
  );
}
