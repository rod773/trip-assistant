import React from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import {ParallaxProvider} from "react-scroll-parallax";

const App = () => {
    return (
        <ParallaxProvider>
            <Navbar/>
            <Header />
        </ParallaxProvider>
    );
};

export default App;

