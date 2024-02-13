import React from 'react';
import './slider.css';
import Image from 'next/image';
import sliderImg from '../../app/assets/img/slider.jpg';

const Slider = () => {
    return (
        <div className='relative w-full h-full pt-5'>
            <Image src={sliderImg} alt="#" />
            <div className='absolute flex flex-col bottom-32 left-1/3 '>
                <h4 className='text-5xl font-bold '> The Scent of Lifetime </h4>
                <div className='flex justify-around mt-3'>
                    <button className='px-8 py-3 text-xl w-44 rounded-2xl shop-btn'>Shop Now </button>
                    <button className='px-8 py-3 text-xl w-44 rounded-2xl read-btn'>Read More </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;