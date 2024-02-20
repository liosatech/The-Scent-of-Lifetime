'use client'

import { useState } from 'react';

import slideImgone from '../../app/assets/img/porduct-img/Victoria`s Secret.png';
import slideImgtow from '../../app/assets/img/porduct-img/FlowerBomb.png';
import slideImgtree from '../../app/assets/img/porduct-img/victorias-secret-bombshell-today-tease-160606 1.png';

import backslideImg from '../../app/assets/img/porduct-img/backtow.png';
import backslideImgtwo from '../../app/assets/img/porduct-img/backthree.png';
import backslideImgthree from '../../app/assets/img/porduct-img/Vector.png';
import {RxDotFilled} from 'react-icons/rx';
import { FaShoppingBag } from "react-icons/fa";

import Image from 'next/image';

const SpecialProduct = () => {
    

    const slider =[
        {
            URL : slideImgone
        },
        {
            URL : slideImgtow
        },
        {
            URL : slideImgtree
        },
        {
            URL : slideImgtow
        },
        {
            URL : slideImgtree
        },
        {
            URL : slideImgone
        }
    ]

    const backImgsild =[backslideImg, backslideImgtwo,backslideImgthree ]
    
    const [currentPage, setCurrentPage] = useState(0);

    const goToSlide = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const totalPages = Math.ceil(slider.length / 3);
    const startIndex = currentPage * 3;
    const visibleImages = slider.slice(startIndex, startIndex + 3);


    return (
        <div className='flex flex-col flex-wrap items-center justify-center overflow-hidden mt-14'>
            <h3 className='text-4xl font-bold '>Special Product</h3>
            <button className='mt-3 porduct-btn' type="#">More Product</button>
            <div className='flex flex-col items-center w-full h-full pt-6 md:flex-row justify-evenly'>
                {visibleImages.map((image, index) => (
                    <div key={index} className='flex flex-col items-center justify-center flex-1 w-48 h-80' style={{
                        backgroundImage: `url(${backImgsild[index].src})`,
                        backgroundPosition: "center",
                        backgroundSize: "65%",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <Image className='w-32 mt-8 md:w-40' src={image.URL} />
                        <h4>{index === 0 ? "Victoria's Secret Bombshell" : index === 1 ? "FlowerBomb Victoria" : "Lavida es Bella"}</h4>
                        <span className='inline mt-2'>$ {index === 0 ? "100,000" : index === 1 ? "80,000" : "120,000"} <FaShoppingBag className='inline mb-2 text-2xl' /></span>
                    </div>
                ))}
            </div>
            
            <div className='flex items-center justify-center'>
                {[...Array(totalPages).keys()].map((pageIndex) => (
                    <div className="text-6xl cursor-pointer panglar-color" key={pageIndex} onClick={() => goToSlide(pageIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialProduct;