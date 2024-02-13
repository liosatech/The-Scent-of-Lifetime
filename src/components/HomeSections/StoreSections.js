import React from 'react';
import imgsone from '../../app/assets/img/store-img/Store-one.png';
import imgstow from '../../app/assets/img/store-img/store-one-b.png';
import imgstree from '../../app/assets/img/store-img/Store-tow.png';
import imgsfour from '../../app/assets/img/store-img/store-tow-b.png';
import imgsfive from '../../app/assets/img/store-img/Store-tree.png';
import imgssix from '../../app/assets/img/store-img/store-tree-b.png';
import imgssiven from '../../app/assets/img/store-img/store-four.png';
import imgseight from '../../app/assets/img/store-img/store-four-b.png';
import frameImg from '../../app/assets/img/Frame.png'

import Image from 'next/image';

const StoreSections = () => {
    return (
        <div className='container flex flex-col justify-center w-full pt-4'>
            <div className='flex items-center justify-center'>
                <div className='relative flex-1 w-60 h-60' style={{ 
                backgroundImage: `url(${imgstow.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute z-10 top-10 left-10' width={100} height={100} src={imgsone} alt="imgsone" />
                    <div className='z-30 pt-20 pr-16 font-bold text-right text-1xl'>
                    Money
                    <br /> 
                    back guarantee
                    </div>
                </div>
                <div className='relative flex-1 w-60 h-60' style={{ 
                backgroundImage: `url(${imgsfour.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute top-10 ' width={80} height={100} src={imgstree} alt="imgstree" />
                    <div className='pt-20 pr-16 font-bold text-right text-1xl'>
                    Delivery
                    <br />  
                    in 1–2 Hours
                    </div>
                </div>
                <div className='relative flex-1 w-60 h-60' style={{ 
                backgroundImage: `url(${imgssix.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute top-10 ' width={80} height={100} src={imgsfive} alt="imgsfive" />
                    <div className='pt-20 pr-16 font-bold text-right text-1xl'>
                    Gift-wrap
                    <br /> 
                    ped Packaging
                    </div>
                </div>
                <div className='relative flex-1 w-60 h-60' style={{ 
                backgroundImage: `url(${imgseight.src})`,
                backgroundPosition: "center",
                backgroundSize: "containe",
                backgroundRepeat: "no-repeat",}}>
                    <Image className='absolute top-10 ' width={100} height={100} src={imgssiven} alt="imgssiven" />
                    <div className='pt-20 pr-24 font-bold text-right text-1xl'>
                    Free shipping
                    <br /> 
                    Worldwide
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col items-center justify-center mt-28'>
                <div className='w-full mb-4'>
                    <h3 className='text-4xl font-bold text-center'>About SL Store</h3>
                    <span className='text-center '></span>
                </div>
                <p className='w-4/5 text-center text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, <br/> pulvinar dapibus leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet</p>
            
                <Image className="absolute top-26 right-4" width={200} height={200} src={frameImg} alt="frameImg" />
            </div>
        </div>
    );
};

export default StoreSections;