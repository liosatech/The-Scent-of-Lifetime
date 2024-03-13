import React from 'react';
import imgsone from '../../app/assets/img/store-img/Store-one.png';
import imgstow from '../../app/assets/img/store-img/store-one-b.png';
import imgstree from '../../app/assets/img/store-img/Store-tow.png';
import imgsfour from '../../app/assets/img/store-img/store-tow-b.png';
import imgsfive from '../../app/assets/img/store-img/Store-tree.png';
import imgssix from '../../app/assets/img/store-img/store-tree-b.png';
import imgssiven from '../../app/assets/img/store-img/store-four.png';
import imgseight from '../../app/assets/img/store-img/store-four-b.png';
import frameImg from '../../app/assets/img/Frame.png';

import Image from 'next/image';

const StoreSections = () => {
    return (
        <div className='container flex flex-col justify-center w-full pt-4 pb-0 overflow-hidden fonts sm:pb-20'>
            <div className='grid items-center justify-center grid-cols-1 gap-2 mx-auto  sm:gird-cols-2 md:grid-cols-4'>
                <div className='relative flex-1 ml-20 sm:ml-0 w-60 h-60' style={{
                backgroundImage: `url(${imgstow.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute z-10 w-16 md:w-20 top-10 left-2' src={imgsone} alt="imgsone" />
                    <div className='z-30 pt-20 pr-12 font-bold text-right text-1xl'>
                    Money
                    <br />
                    back guarantee
                    </div>
                </div>
                <div className='relative flex-1 w-64 ml-20 h-60 sm:ml-0' style={{
                backgroundImage: `url(${imgsfour.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute w-14 md:w-16 top-10' src={imgstree} alt="imgstree" />
                    <div className='pt-20 pr-12 font-bold text-right text-1xl'>
                    Delivery
                    <br />
                    in 1–2 Hours
                    </div>
                </div>
                <div className='relative flex-1 w-64 ml-20 h-60 sm:ml-0' style={{
                backgroundImage: `url(${imgssix.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute w-14 top-10 md:w-16'  src={imgsfive} alt="imgsfive" />
                    <div className='pt-20 pr-12 font-bold text-right text-1xl'>
                    Gift-wrap
                    <br />
                    ped Packaging
                    </div>
                </div>
                <div className='relative flex-1 ml-20 w-60 h-60 sm:ml-0' style={{
                backgroundImage: `url(${imgseight.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundOrigin: "content-box",}}>
                    <Image className='absolute w-14 left-5 top-10 md:w-16' src={imgssiven} alt="imgssiven" />
                    <div className='pt-20 font-bold text-right pr-22 text-1xl'>
                    Free shipping
                    <br />
                    Worldwide
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col items-center justify-center mt-28 '>
                <div className='w-full mb-4'>
                    <h3 className='text-4xl font-bold text-center'>About SL Store</h3>
                    <span className='text-center '></span>
                </div>
                <p className='w-4/5 text-center text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br/> pulvinar dapibus leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet</p>
                <Image className="absolute opacity-20 top-26 right-4 sm:opacity-100" width={200} height={200} src={frameImg} alt="frameImg" />
            </div>
        </div>
    );
};

export default StoreSections;