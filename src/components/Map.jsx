import React from 'react';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from "../hooks/useMediaQuery";
import {API_KEY} from "../utils/secretConsts";

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const isMobile = useMediaQuery('(min-width: 600px)')

    return (
        <div className='pt-60 h-screen w-full'>
            <GoogleMapReact
                bootstrapURLKeys={{key: API_KEY}}
                defaultCenter={{lat: 0, lng: 0}}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;