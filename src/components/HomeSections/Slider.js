"use client"

import { useState } from 'react';
import './slider.css';
import Image from 'next/image';
import sliderImg from '../../app/assets/img/slider.jpg';
import {BsChevronCompactLeft} from 'react-icons/bs';
import {BsChevronCompactRight} from 'react-icons/bs';
// import {RxDotFilled} from 'react-icons/rx';

const Slider = () => {

    const sliders =[
        {
            URL: sliderImg
        },
    ]

    const [Curentslide , setCurentslide] = useState(0);

    const pevSlide =()=>{
        const isfirstsild = Curentslide === 0;
        const newslid = isfirstsild ? sliders.length -1 : Curentslide -1;
        setCurentslide(newslid);
    }
    const nextSlide =()=>{
        const isLastsild = Curentslide === sliders.length - 1;
        const newslid = isLastsild ? 0 :  Curentslide + 1;
        setCurentslide(newslid);
        console.log(Curentslide);
    }

    // const goTosilde =(slidersIndex) =>{
    //     setCurentslide(slidersIndex);
    // }

    return (
        <div className='relative w-full h-full pt-5 overflow-hidden'>
            <Image className='w-auto h-auto duration-500' src={sliders[Curentslide].URL} alt="#" />
            {/* left arrow */}
            <div className=' absolute top-1/2 -translate-x-0 translate-y-{-50%} left-5 text-2xl rounded-full p-2 text-black cursor-pointer'>
                        <BsChevronCompactLeft onClick={pevSlide} size={30}  />
                    </div>
                    {/* right arrow */}
                    <div className='absolute top-1/2 -translate-x-0 translate-y-{-50%} right-5 text-2xl rounded-full p-2 text-black cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
            {/* {sliders.map((slide, slidersIndex) => (
                <div key={slidersIndex} onClick={()=> goTosildes(slidersIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                </div>
            ))} */}
            <div className='absolute bottom-0 flex flex-col left-1/3 md:bottom-24'>
                <h4 className='text-base font-bold md:text-5xl'> The Scent of Lifetime </h4>
                <div className='flex justify-around mt-3'>
                    <button className='px-2 py-1 text-sm w-22 md:text-xl md:px-8 md:py-3 md:w-40 rounded-2xl shop-btn'>Shop Now </button>
                    <button className='px-2 py-1 ml-2 text-sm w-22 md:text-xl md:px-8 md:py-3 md:w-40 rounded-2xl read-btn'>Read More </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;