import React, {useState} from 'react';
import {Autocomplete} from "@react-google-maps/api";

const Navbar = ({setCoordinates}) => {
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoC) => setAutocomplete(autoC)
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng})
    }

    return (
        <div className='sm:flex justify-between items-center absolute w-full z-10 h-5 p-5 md:p-14'>
            <div className='md: flex justify-center'>
                <h2>TRIPS.</h2>
            </div>
            <div className='relative md:block'>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className='flex'>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <input type="text" id="search-navbar"
                               className="block p-2 pl-10 w-full text-gray-900 rounded-lg border sm:text-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-700/10 border-gray-600 placeholder-white text-white focus:ring-gray-500 focus:border-gray-500"
                               placeholder="Search..."
                        />
                    </Autocomplete>

                </div>
            </div>
        </div>
    );
};

export default Navbar;