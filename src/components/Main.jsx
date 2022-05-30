import React, {useRef} from 'react';
import bgForest from '../assets/bgForest.png';
import bgPart from '../assets/bgPart.png';
import sun from '../assets/sun.png';
import trees from '../assets/trees.png';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import List from '../components/List';
import Map from '../components/Map';


const Main = ({setCoordinates, coordinates, setBounds, places}) => {

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
                        <img src={bgForest} alt='bg'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={-0.3}
                        style={{zIndex: '0'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={sun} alt='sun'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        speed={-0.1}
                        style={{zIndex: '10'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={bgPart} alt='bgPart'/>
                    </ParallaxLayer>
                    <ParallaxLayer
                        style={{zIndex: '20'}}
                        onClick={() => ref.current.scrollTo(1)}
                    >
                        <img src={trees} alt='trees'/>
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
                                <List places={places}/>
                                <Map places={places} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
                            </div>
                        </div>
                    </ParallaxLayer>
                </div>
            </Parallax>

        </div>
    );
};

export default Main;