import React from 'react';
import Slider from '@/components/HomeSections/Slider';
import StoreSections from '@/components/HomeSections/StoreSections';
import SpecialProduct from '@/components/HomeSections/SpecialProduct';
import AboutUs from '@/components/HomeSections/AboutUs';
import Trands from '@/components/HomeSections/trands';
import Newspage from '@/components/HomeSections/Newspage';


const Home = () => {
  return (
    <div className='pt-5 pb-10 fonts'>
      <Slider />
      <StoreSections  className="container"/>
      <SpecialProduct />
      <AboutUs />
      <Trands />
      <Newspage />
    </div>
  );
};

export default Home;