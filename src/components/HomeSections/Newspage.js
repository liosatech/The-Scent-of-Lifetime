'use client'
import { useState } from 'react';
import Image from 'next/image';
import newsimagOne from '../../app/assets/img/NewsImg/bottle-perfumes-pink-wall-with-flowers 1.png';
import newsimagTow from '../../app/assets/img/NewsImg/close-up-photo-fragrance-bottle-with-flowers 1.png';
import newsimagTree from '../../app/assets/img/NewsImg/high-angle-elegant-bottle-perfume-tray-valentine-s-day 1.png';
import newsBack from '../../app/assets/img/NewsImg/Vector (5).png';
import {RxDotFilled} from 'react-icons/rx';

const Newspage = () => {

    const newsSlider =[
        {
            URL: newsimagOne
        },
        {
            URL: newsimagTow
        },
        {
            URL: newsimagTree
        },
        {   
            URL: newsimagTow
        },
        {   
            URL: newsimagTree
        },
        {
            URL:  newsimagTow
        },
    ]

    const [Curentslide , setCurentslide] = useState(0);


        const goTosilde =(slidersIndex) =>{
        setCurentslide(slidersIndex);
    };

    const totalPages = Math.ceil(newsSlider.length / 3);
    const startIndex = Curentslide * 3;
    const visibleImages = newsSlider.slice(startIndex, startIndex + 3);

    return (
        <>
        <div className='flex flex-col flex-wrap items-center justify-center overflow-hidden mt-14'>
            <h3 className='text-4xl font-bold '>Last News</h3>
            <button className='mt-3 porduct-btn' type="#">More Product</button>
            <div className='flex flex-col items-center w-full h-full md:flex-row justify-evenly'>
            {visibleImages.map((image, index) => (
                    <div key={index} className='relative mt-10'>
                        <Image className='w-80' src={newsBack} />
                        <Image className='absolute w-64 ease-in delay-400 top-10 right-3' src={image.URL} />
                        <h4 className='absolute text-lg font-bold top-56 left-16'>Thierry Mugler Angel</h4>
                        <span className='absolute text-base top-64 left-16'>date: </span>
                        <span className='absolute text-base top-72 left-14'>Tuesday, February 21, 2023</span>
                    </div>
                ))}
            </div>
        </div>     
        <div className='flex items-center justify-center '>
            {[...Array(totalPages).keys()].map((slidersIndex) => (
                <div className="text-6xl cursor-pointer panglar-color" key={slidersIndex} onClick={() => goTosilde(slidersIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>
        </>
    );
};

export default Newspage;