import React from 'react';
import Slider from '@/components/HomeSections/Slider';
import StoreSections from '@/components/HomeSections/StoreSections';
import SpecialProduct from '@/components/HomeSections/SpecialProduct';

const Home = () => {
  return (
    <div className='pt-5 fonts'>
      <Slider />
      <StoreSections  className="container"/>
      <SpecialProduct />
    </div>
  );
};

export default Home;