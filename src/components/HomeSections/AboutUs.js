import React from 'react';
import Image from 'next/image';
import faceimg from '../../app/assets/img/Group.png';
import handImage from '../../app/assets/img/Frame (1).png';

import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className='overflow-hidden AboutUsBody'>
            <div className='container '>
                <div className='flex justify-start mt-5'>
                    <div className='flex-1 justify-self-end'>
                    <Image className='ml-2 sm:ml-20' width={330} height={330} src={ faceimg }/>
                    </div>
                    <div className='self-start flex-1 w-20 text-2xl text-left sm:self-center md:text-3xl lg:text-4xl'>
                        <h3>You are <span className='text-3xl font-bold md:text-4xl lg:text-5xl'>unique</span></h3>
                    </div>
                    <div className='self-end flex-1 mb-0 text-2x1 md:text-3xl lg:text-4xl sm:mb-28 mr-4 m=sm:mr-0'>
                        <h3>so is your <span className='text-3xl font-bold md:text-4xl lg:text-5xl'>fragrance</span></h3>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center w-2/3 pb-4 mx-auto mt-5 text-center sm:mt-0'>
                        <div className='flex flex-col justify-start align-top'>
                            <p className='text-xl text-left felx-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet</p>
                            <button className='w-64 mt-5 text-base justify-self-start porduct-btn'>See Unique Fragrance</button>
                        </div>
                        <div className='relative w-full '>
                            <Image className='absolute -bottom-20 max-w-none -right-50 w-96' src={handImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;