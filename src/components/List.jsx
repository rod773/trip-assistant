import React, {useState} from 'react';
import PlaceDetails from "./PlaceDetails";

const List = ({places}) => {
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');


    return (
        <div className='py-28'>
            <div className='p-6'>
                <h2>Restaurants, Hotels & Attractions around you</h2>
                <form className='grid grid-cols-2 gap-4 pt-10 pr-6 pb-4'>
                    <div>
                        <label
                            htmlFor="restaurants"
                            className="block mb-2 text-sm font-medium text-gray-400">Restaurants</label>
                        <select
                            value={type}
                            onChange={e => setType(e.target.value)}
                            id="restaurants"
                            className="border text-gray-900 text-sm rounded-lg focus:border-white block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-white">
                            <option value={'restaurants'}>Restaurants</option>
                            <option value={'hotels'}>Hotels</option>
                            <option value={'attractions'}>Attractions</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="restaurants"
                            className="block mb-2 text-sm font-medium text-gray-400">Rating</label>
                        <select
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id="rating"
                            className="border text-gray-900 text-sm rounded-lg focus:border-white block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-white">
                            <option value={0}>All</option>
                            <option value={3}>Above 3.0</option>
                            <option value={4.0}>Above 4.0</option>
                            <option value={4.5}>Above 4.5</option>
                        </select>
                    </div>
                </form>
                <div className='h-screen overflow-auto flex flex-col'>
                    {places?.map((place, i) => (
                        <div className='pt-8 pr-6' key={i}>
                            <PlaceDetails place={place}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;