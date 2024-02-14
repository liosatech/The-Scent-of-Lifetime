import React from 'react';
import Slider from '@/components/HomeSections/Slider';
import StoreSections from '@/components/HomeSections/StoreSections';
import SpecialProduct from '@/components/HomeSections/SpecialProduct';
import AboutUs from '@/components/HomeSections/AboutUs';

const Home = () => {
  return (
    <div className='pt-5 fonts'>
      <Slider />
      <StoreSections  className="container"/>
      <SpecialProduct />
      <AboutUs />
    </div>
  );
};

export default Home;