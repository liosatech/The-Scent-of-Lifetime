import React from 'react';

import slideImgone from '../../app/assets/img/porduct-img/Victoria`s Secret.png';
import slideImgtow from '../../app/assets/img/porduct-img/FlowerBomb.png';
import slideImgtree from '../../app/assets/img/porduct-img/victorias-secret-bombshell-today-tease-160606 1.png';

import backslideImg from '../../app/assets/img/porduct-img/Vector (1).png';
import backslideImgtow from '../../app/assets/img/porduct-img/Vector (2).png';
import backslideImgtree from '../../app/assets/img/porduct-img/Vector.png';

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
            URl : slideImgtree
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center overflow-hidden mt-14'>
            <h3 className='text-4xl font-bold '>Special Product</h3>
            <button className='mt-3 porduct-btn' type="#">More Product</button>
            <div className='flex items-center w-full h-full justify-evenly'>
                <div className='flex flex-col items-center justify-center flex-1 w-52 h-96' style={{ 
                backgroundImage:  `url(${backslideImgtree.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",
             }}>
                    <Image className='mt-8' src={slider[2].URl}  width={220}/>
                    <h4>Victoria`s Secret Bombshell</h4>
                    <span className=''>$100,000</span>
                </div>
                <div  className='flex flex-col items-center justify-center flex-1 w-52 h-96' style={{
                    backgroundImage:  `url(${backslideImgtree.src})` ,
                    backgroundPosition: "center",
                    backgroundSize: "containe",
                    backgroundRepeat: "no-repeat", }}>
                    <Image className='mt-8' src={slider[2].URl} width={220}/>
                    <h4>FlowerBomb Victoria</h4>
                    <span className=''>$80,000</span>
                </div>
                <div  className='flex flex-col items-center justify-center flex-1 w-52 h-96' style={{ 
                    backgroundImage:  `url(${backslideImgtree.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "containe",
                    backgroundRepeat: "no-repeat", }}>
                    <Image className='mt-8' src={slider[2].URl} width={220}/>
                    <h4>Lavida es Bella</h4>
                    <span className=''>$120,000</span>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;