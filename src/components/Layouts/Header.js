import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import LogoImg from '../../app/assets/img/سلین 1.png';

const Header = () => {
    return (
        <div className='fixed right-0 z-50 flex items-start justify-between w-full px-3  top-1'>
            <div className='grow'>
                <Image className='hidden w-64 h-60 sm:block' src={LogoImg} alt="Logo"/>
            </div>
            <div dir="rtl" className='flex flex-col items-start justify-end flex-none pt-3 pr-4 grow'>
               <Menu />
               <div className='flex justify-end flex-none mt-3'>
                 <div className='flex items-center justify-center flex-1'>
                    <p className='ml-4'>0.00</p>
                    <div  className='ml-4'>
                        cart
                    </div>
                 </div>
                 <div className='flex items-center justify-center'>
                    <p className='ml-4'>Search</p>
                    <div className='ml-4'>
                        Search
                    </div>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default Header;