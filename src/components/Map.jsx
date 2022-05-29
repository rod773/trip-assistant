import React from 'react';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from "../hooks/useMediaQuery";
import {API_KEY} from "../utils/secretConsts";

const Map = () => {
    const isMobile = useMediaQuery('(min-width: 600px)')
    const coordinates = {lat: 0, lng: 0}

    return (
        <div className='py-28 h-screen w-full'>
            <GoogleMapReact
                bootstrapURLKeys={{key: API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;