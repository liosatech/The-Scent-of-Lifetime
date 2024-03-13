import React from 'react';
import Image from 'next/image';

import sliderimgOne from '../../app/assets/img/Trands-img/victorias-secret-bombshell-today-tease-160606 1 (1).png';
import sliderimgTow from '../../app/assets/img/Trands-img/Lavida es Bella.png';
import sliderimgtree from '../../app/assets/img/Trands-img/FlowerBomb Victoria.png';

import backtrandsImgone from '../../app/assets/img/Trands-img/Vector (3).png';
import backtrandsImgtow from '../../app/assets/img/Trands-img/Vector (4).png';

const SliderTrands = () => {
    const trandslider = [
        {
            URL: sliderimgOne
        },
        {
            URL: sliderimgTow
        },
        {
            URL:sliderimgtree
        },
    ]

    return (
        <div className='grid w-full h-full grid-cols-1 gap-1 md:grid-cols-2 justify-stretch'>
            <div className='relative flex items-center justify-center h-full'>
                <Image className='absolute top-40' src={backtrandsImgone}/>
                <Image className='absolute w-56 top-28 md:top-32' src={trandslider[0].URL} />
                <p className='absolute top-80 md:top-2/3 '>Victoria`s Secret Bombshell</p>
                <span className='absolute -bottom-96 md:bottom-28'>100.000 $</span>
            </div>
                <div  className='flex items-center justify-between'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='relative w-full h-full mr-8 md:mt-0 mt-96'>
                            <Image className='w-40 h-40 mt-20 ml-24 md:ml-0' src={backtrandsImgtow}/>
                            <Image className='absolute w-24 top-20 md:top-16 md:bottom-20 md:left-8 left-36' src={trandslider[1].URL} />
                            <p className='absolute text-xs top-44 md:left-8 left-32'>Victoria`s Secret Bombshell</p>
                            <span className='absolute text-xs text-center top-52 md:left-8 left-32'>100.000 $</span>
                        </div>
                        <div className='relative hidden w-full h-full sm:block'>
                            <Image className='w-40 h-40 mt-20 ' src={backtrandsImgone}/>
                            <Image className='absolute w-24 bottom-20 left-8' src={trandslider[1].URL} />
                            <p className='absolute text-xs top-44 '>Victoria`s Secret Bombshell</p>
                            <span className='absolute text-xs text-center top-52 left-8'>100.000 $</span>
                        </div>
                        <div className='relative hidden w-full h-full mr-8 sm:block'>
                            <Image className='w-40 h-40 mt-20 ' src={backtrandsImgtow}/>
                            <Image className='absolute w-24 bottom-20 left-8' src={trandslider[2].URL} />
                            <p className='absolute text-xs top-44 '>Victoria`s Secret Bombshell</p>
                            <span className='absolute text-xs text-center top-52 left-8'>100.000 $</span>
                        </div>
                        <div className='relative hidden w-full h-full sm:block'>
                            <Image className='w-40 h-40 mt-20 ' src={backtrandsImgone}/>
                            <Image className='absolute w-24 bottom-20 left-8' src={trandslider[2].URL} />
                            <p className='absolute text-xs top-44 '>Victoria`s Secret Bombshell</p>
                            <span className='absolute text-xs text-center top-52 left-8'>100.000 $</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SliderTrands;