import React from 'react';
import Slider from '@/components/HomeSections/Slider';
import StoreSections from '@/components/HomeSections/StoreSections';

const Home = () => {
  return (
    <div className='pt-5'>
      <Slider />
      <StoreSections  className="container"/>
    </div>
  );
};

export default Home;