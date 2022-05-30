import React, {useRef, useState} from 'react';
import bgForest from '../assets/bgForest.png';
import bgPart from '../assets/bgPart.png';
import sun from '../assets/sun.png';
import trees from '../assets/trees.png';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import List from '../components/List';
import Map from '../components/Map';


const Main = ({setCoordinates, coordinates, setBounds, places, isLoading, type, setType, rating, setRating, filteredPlaces, weatherData}) => {
    const [childClicked, setChildClicked] = useState(null);
    const ref = useRef();

    return (
        <div className='h-full'>
            <Parallax pages={3} ref={ref}>
                <div className='h-screen'>
                    <ParallaxLayer
                        offset={0}
                        speed={-0.1}
                        style={{zIndex: '0'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={bgForest} className='absolute w-full h-screen object-cover' alt='bg'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={-0.3}
                        style={{zIndex: '0'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={sun} className='absolute w-full h-screen object-cover' alt='sun'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={-0.1}
                        style={{zIndex: '10'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={bgPart} className='absolute w-full h-screen object-cover' alt='bgPart'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        style={{zIndex: '20'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={trees} className='absolute w-full h-screen object-cover' alt='trees'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        speed={-0.2}
                        style={{zIndex: '15'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Explore.</h1>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1}
                        onClick={() => ref.current.scrollTo(2)}
                    >
                        <div className='h-screen bg-[#040613]'>
                            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>The World.</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        style={{zIndex: '20'}}
                    >
                        <div className='h-screen bg-[#040613]'>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <List
                                    places={filteredPlaces.length ? filteredPlaces : places}
                                    childClicked={childClicked}
                                    isLoading={isLoading}
                                    type={type}
                                    setType={setType}
                                    rating={rating}
                                    setRating={setRating}
                                />
                                <Map
                                    weatherData={weatherData}
                                    setChildClicked={setChildClicked}
                                    places={filteredPlaces.length ? filteredPlaces : places}
                                    setCoordinates={setCoordinates}
                                    setBounds={setBounds}
                                    coordinates={coordinates}
                                />
                            </div>
                        </div>
                    </ParallaxLayer>
                </div>
            </Parallax>

        </div>
    );
};

export default Main;