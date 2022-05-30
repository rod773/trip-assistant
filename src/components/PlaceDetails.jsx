import React from 'react';
import restaurant from '../assets/restaurant.jpg'

const PlaceDetails = ({place}) => {
    return (
        <div className="max-w-full rounded-lg border shadow-sm shadow-white/50 bg-gray-800 border-gray-700">
            <img
                className="rounded-t-lg h-80 relative absolute w-full h-screen object-cover"
                src={place.photo ? place.photo.images.medium.url : restaurant}
                alt={place.name}
            />
            <div className='p-5'>
                <div>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{place.name}</h5>
                </div>
                <div className='flex justify-between'>
                    <p className='mb-3 font-normal text-gray-400'>{place.price_level}</p>
                    <p className='mb-3 font-normal text-gray-400'>{place.price}</p>
                </div>
                <div className='flex justify-between sm: flex-none'>
                    <div className='mb-3 font-normal text-gray-400'>Ranking: </div>
                    <div className='mb-3 font-normal text-gray-400'>{place.ranking ? place.ranking :
                        <p> No Ranking</p>}
                    </div>
                </div>
                {place?.awards?.map((award) => (
                    <div key={award.display_name} className='mb-3 font-normal text-gray-400 flex justify-between'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                        </svg>
                        <p>{award.display_name}</p>
                    </div>
                ))}
                <div className=''>
                    {place.cuisine?.map(({name}) => (
                        <div key={name}>
                             <span
                                 className="break-all whitespace-pre-wrap text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='mb-3 flex justify-between'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {place?.address ? place.address : <p>No Address</p>}
                    </div>
                </div>
                <div>
                    <div className='mb-3 flex justify-between'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        {place?.phone ? place.phone : <p>No Phone</p>}
                    </div>
                </div>
                <div className='flex justify-between'>
                    <a href={place.web_url} target='_blank' rel='noreferrer'
                       className="inline-flex items-center py-2 px-3 m-1 text-xs font-medium text-center text-white rounded-lg focus:ring-4 bg-purple-500 hover:bg-purple-600 focus:ring-purple-700">
                        Trip Advisor
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href={place.website} target='_blank' rel='noreferrer'
                       className="inline-flex items-center py-2 px-3 m-1 text-sm font-medium text-center text-white rounded-lg focus:ring-4 bg-purple-500 hover:bg-purple-600 focus:ring-purple-700">
                        Website
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;