import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {key} from '../../apiKey'

export default function Map({ location, zoomLevel }) {
  return (
    <div>

      <div className="google-map" style={{width: '100%', height: "65vh"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={location}
          defaultZoom={zoomLevel}>
          <LocationOnIcon lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>

  );
}
