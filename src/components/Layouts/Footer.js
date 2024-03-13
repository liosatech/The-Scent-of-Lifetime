import React from 'react';
import Link from 'next/link';
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='overflow-hidden footer'>
            <div className='container '>
                <div className='flex flex-col items-start justify-around pt-5 pb-10 md:flex-row'>
                    <div className='flex flex-col flex-wrap justify-between flex-1'>
                        <div className='flex justify-around'>
                            <div className='flex items-center justify-center w-10 h-10 ml-3 bg-gray-400 rounded-full'>
                            <MdEmail  className='text-2xl '/>
                            </div>
                            <h3 className='text-s md:text-xl'>info@sample.com</h3>
                        </div>
                        <div  className='flex justify-around '>
                            <div className='flex items-center justify-center w-10 h-10 my-3 ml-3 bg-gray-400 rounded-full'>
                            <MdEmail  className='text-2xl '/>
                            </div>
                            <h3 className='mt-3 text-s md:text-xl'>info@sample.com</h3>
                        </div>
                        <div  className='flex justify-around'>
                            <div className='flex items-center justify-center w-10 h-10 ml-3 bg-gray-400 rounded-full'>
                            <MdEmail  className='text-2xl '/>
                            </div>
                            <h3 className='text-s md:text-xl'>info@sample.com</h3>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start flex-1 my-10 ps-4 md:ps-44 md:my-0'>
                        <Link className='text-sm text-black md:text-2xl text-start hover:text-slate-400 hover:font-bold' href="./News">News</Link>
                        <Link className='my-3 text-sm text-black md:text-2xl text-start hover:text-slate-400 hover:font-bold' href="./ContactUs">ContactUs</Link>
                        <Link className='text-sm text-black md:text-2xl text-start hover:text-slate-400 hover:font-bold' href="./Blog">Blog</Link>
                        <Link className='mt-3 text-sm text-black md:text-2xl text-start hover:text-slate-400 hover:font-bold' href="./">Home</Link>
                    </div>
                    <div className='flex flex-col items-start justify-start flex-1 ps-2'>
                        <h4 className='text-sm ms-2 md:ms-0 md:text-xl'>Subscribe to our newsletter</h4>
                        <h4 className='text-sm ms-2 md:ms-0 md:text-xl'>Don't let anything slip by.</h4>
                        <input className='h-12 mt-3 bg-white ps-2 md:px-4 my:py-3 rounded-2xl' type="email" name="#" value="Your email address" />
                        <button className='mt-4 text-xs porduct-btn md:text-xl' type="#">More Product</button>
                    </div>
                </div>
                <div className='flex justify-between mt-20 mb-5'>
                    <h5 className='text-xs '>Copyright © 2023 SL Online Perfume Shop</h5>
                    <h5 className='text-xs '>Design by Liosatech</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;