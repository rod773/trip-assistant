import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Main from "./components/Main";
import {getPlacesData} from './api/index'

const App = () => {
    const [places, setPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })

    }, [])

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data)
            });
    }, [coordinates, bounds])
    return (<div>
            <Navbar/>
            <Main
                places={places}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
            />
        </div>
    );
};

export default App;

