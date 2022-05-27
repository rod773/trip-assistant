import React from 'react';
import bg1 from '../assets/bgEdited.png';
import man from '../assets/man.png';
import rock from '../assets/rock.png';
import beach from '../assets/beach.png';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

const Header = () => {
    return (
        <Parallax pages={2}>
            <header>
                <ParallaxLayer
                    offset={0}
                    style={{height: '100vh', position: 'absolute', zIndex: '10', top: '20%', left: '50%'}}>
                    <h1>Explore.</h1>
                </ParallaxLayer>

                <ParallaxLayer speed={0.1}>
                    <img src={bg1} alt='bg1'/>
                </ParallaxLayer>
                <ParallaxLayer speed={0.2}>
                    <img src={man} alt='man'/>
                </ParallaxLayer>
                <ParallaxLayer speed={0.2}>
                    <img src={rock} alt='rock'/>
                </ParallaxLayer>
                <ParallaxLayer speed={0.2}>
                    <img src={beach} alt='beach'/>
                </ParallaxLayer>

                <ParallaxLayer offset={1} factor={2}>
                    <div className='w-full bg-black min-h-screen z-0'></div>
                </ParallaxLayer>
            </header>
        </Parallax>
    );
};

export default Header;