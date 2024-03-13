'use client'

import {useState , useEffect} from 'react';
import Menu from './Menu';
import Image from 'next/image';
import LogoImg from '../../app/assets/img/سلین 1.png';
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolledDown(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={` right-0 z-50 flex items-start justify-between w-full transition delay-400 ease-out px-3 top-0 ${isScrolledDown ? 'bg-pink-50' : ''}`}>
            <div className={`grow ${isScrolledDown ? 'w-40' : ''}`}>
                <Image className={`hidden w-64 h-60  sm:block ${isScrolledDown ? 'w-24 h-20' : ''}`}  src={LogoImg} alt="Logo"/>
            </div>
            <div dir="rtl" className='flex flex-col items-start justify-end flex-none pt-3 pr-4 grow'>
                <Menu />
                <div className='flex justify-end flex-none mt-3'>
                    <div className='flex items-center justify-center flex-1'>
                        <p className='ml-4'>0.00</p>
                        <div  className='ml-4'>
                            <FaCartShopping />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='ml-4'>Search</p>
                        <div className='ml-4'>
                            <IoSearchOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;