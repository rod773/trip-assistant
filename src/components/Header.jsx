import React, {useRef, useEffect} from 'react';
import bgForest from '../assets/bgForest.png';
import bgPart from '../assets/bgPart.png';
import sun from '../assets/sun.png';
import trees from '../assets/trees.png';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";


const Header = () => {

    const ref = useRef();

    return (
        <Parallax pages={2} ref={ref}>
            <header className='h-screen'>
                <ParallaxLayer
                    offset={0}
                    speed={-0.1}
                    style={{zIndex: '0'}}
                    onClick={() => ref.current.scrollTo(1)}
                >
                    <img src={bgForest} alt='bg'/>
                </ParallaxLayer>
                <ParallaxLayer
                    speed={-0.5}
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
                    speed={-0.3}
                    style={{zIndex: '15'}}
                    onClick={() => ref.current.scrollTo(1)}
                >
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Explore.</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    style={{zIndex: '20', marginBottom: '100px'}}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <div className='h-screen bg-[#040613]'>
                        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>The World.</h1>
                    </div>
                </ParallaxLayer>
            </header>
        </Parallax>
    );
};

export default Header;