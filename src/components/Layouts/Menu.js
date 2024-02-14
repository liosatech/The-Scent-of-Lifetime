import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <section className=''>
            <nav className='flex items-center justify-center flex-none'>
                <ul className='flex flex-row'>
                    <li><Link className='text-slate-800 hover:text-slate-400 hover:font-bold' href="./News">News</Link></li>
                    <li><Link className='mx-10 text-slate-800 hover:text-slate-400 hover:font-bold' href="./ContactUs">ContactUs</Link></li>
                    <li><Link className='ml-10 text-slate-800 hover:text-slate-400 hover:font-bold' href="./Blog">Blog</Link></li>
                    <li><Link className='text-slate-800 hover:text-slate-400 hover:font-bold' href="./">Home</Link></li>
                </ul>  
            </nav>    
        </section>
    );
};

export default Menu;