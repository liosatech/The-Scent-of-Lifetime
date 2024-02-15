import React from 'react';
import SliderTrands from './SliderTrands';

const Trands = () => {
    return (
        <div className='container flex flex-col items-center justify-center w-full mt-4'>
            <h3 className='text-2xl font-bold text-center md:text-5xl'>Trending perfume this week</h3>
            <div className='flex items-center justify-between w-1/2 mt-3'>
                <span className=' text-sx md:text-xl'>Our Handpicked Fragrances</span>
                <button className='porduct-btn text-sx md:text-xl' type="#">More Product</button>
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <SliderTrands />
            </div>
        </div>
    );
};

export default Trands; 