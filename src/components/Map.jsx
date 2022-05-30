import React from 'react';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from "../hooks/useMediaQuery";
import {API_KEY} from "../utils/secretConsts";
import mapStyles from './mapStyles'
import restaurant from "../assets/restaurant.jpg";

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
    const isDesktop = useMediaQuery('(min-width: 600px)')

    return (
        <div className='pt-60 h-screen w-full'>
            <GoogleMapReact
                bootstrapURLKeys={{key: API_KEY}}
                defaultCenter={{lat: 0, lng: 0}}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                onChange={(e) => {
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
            >
                {places?.map((place, i) => (
                    <div
                        className='absolute z-10 translate-x-1/2 translate-y-1/2'
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop
                                ? (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>)
                                : (
                                    <div
                                        className="shadow-sm shadow-white/50 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
                                        <a href="#">
                                            <img
                                                className="rounded-t-lg w-28 h-full"
                                                src={place.photo ? place.photo.images.medium.url : restaurant}
                                                alt={place.name}
                                            />
                                        </a>
                                        <div className="p-2">
                                            <p className="mb-3 font-normal text-white">{place.name}</p>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;