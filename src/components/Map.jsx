import React from 'react';
import GoogleMapReact from 'google-map-react';
import useMediaQuery from "../hooks/useMediaQuery";
import {API_KEY} from "../utils/secretConsts";
import mapStyles from './mapStyles'
import restaurant from "../assets/restaurant.jpg";
import Rating from '@material-ui/lab/Rating'


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const isDesktop = useMediaQuery('(min-width: 600px)')

    return (
        <div className='pt-60 h-screen w-full'>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={{lat: 0, lng: 0}}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                onChange={(e) => {
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className='absolute z-10 cursor-pointer translate-x-1/2 translate-y-1/2 hover:z-20 '
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
                                        className="group max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 p-2 hover:shadow-sm hover:shadow-white/50">
                                        <p className="mb-3 font-normal text-white">{place.name}</p>
                                        <img
                                            className="rounded-t-lg w-28 h-full group-hover:w-32"
                                            src={place.photo ? place.photo.images.medium.url : restaurant}
                                            alt={place.name}
                                        />
                                        <Rating size='small' value={Number(place.rating)} readOnly/>
                                    </div>
                                )
                        }
                    </div>
                ))}
                {weatherData?.list?.map((data, i) =>(
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img className='h-24' src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0]}/>
                    </div>
                    ))
                }
            </GoogleMapReact>
        </div>
    );
};

export default Map;