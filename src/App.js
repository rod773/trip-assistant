import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Main from "./components/Main";
import {getPlacesData, getWeatherData} from './api/index'

const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [weatherData, setWeatherData] = useState([])


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })

    }, [])

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)

        setFilteredPlaces(filteredPlaces)
    }, [rating]);

    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true)

            getWeatherData(coordinates.lat, coordinates.lng)
                .then((data) => {
                    setWeatherData(data)
                })

            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                    setFilteredPlaces([])
                    setIsLoading(false)
                })
        }

    }, [type, bounds])
    return (<div>
            <Navbar setCoordinates={setCoordinates}/>
            <Main
                type={type}
                setType={setType}
                rating={rating}
                setRating={setRating}
                isLoading={isLoading}
                places={places}
                filteredPlaces={filteredPlaces}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                weatherData={weatherData}
            />
        </div>
    );
};

export default App;

