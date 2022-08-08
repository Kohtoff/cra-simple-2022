import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Map({ location, zoomLevel }) {
  return (
    <div>

      <div className="google-map" style={{width: '100%', height: "65vh"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDtIApnI1-o19mT_SyetSdlwqqR3b2-57E' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}>
          <LocationOnIcon lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>

  );
}
