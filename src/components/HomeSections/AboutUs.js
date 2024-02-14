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
                    <Image className='ml-28' width={330} height={330} src={ faceimg }/>  
                    </div>
                    <div className='self-center flex-1 w-20 text-2xl text-left md:text-3xl lg:text-4xl'>
                        <h3>You are <span className='text-3xl font-bold md:text-4xl lg:text-5xl'>unique</span></h3>
                    </div>
                    <div className='self-end flex-1 text-2x1 md:text-3xl lg:text-4xl mb-28'>
                        <h3>so is your <span className='text-3xl font-bold md:text-4xl lg:text-5xl'>fragrance</span></h3>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center w-2/3 mx-auto text-center'>
                        <p className='text-xl text-left felx-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet</p>
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