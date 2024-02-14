import React from 'react';
import './slider.css';
import Image from 'next/image';
import sliderImg from '../../app/assets/img/slider.jpg';

const Slider = () => {
    return (
        <div className='relative w-full h-full pt-5 overflow-hidden'>
            <Image src={sliderImg} alt="#" />
            <div className='absolute bottom-0 flex flex-col left-1/3 md:bottom-24'>
                <h4 className='text-xl font-bold md:text-4xl'> The Scent of Lifetime </h4>
                <div className='flex justify-around mt-3'>
                    <button className='px-4 py-1 text-sm w-22 md:text-xl md:px-8 md:py-3 md:w-40 rounded-2xl shop-btn'>Shop Now </button>
                    <button className='px-4 py-1 ml-2 text-sm w-22 md:text-xl md:px-8 md:py-3 md:w-40 rounded-2xl read-btn'>Read More </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;