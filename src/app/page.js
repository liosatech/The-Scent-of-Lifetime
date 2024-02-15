import React from 'react';
import Slider from '@/components/HomeSections/Slider';
import StoreSections from '@/components/HomeSections/StoreSections';
import SpecialProduct from '@/components/HomeSections/SpecialProduct';
import AboutUs from '@/components/HomeSections/AboutUs';
import Trands from '@/components/HomeSections/trands';
import SliderTrands from '@/components/HomeSections/SliderTrands';
import News from './News/page';

const Home = () => {
  return (
    <div className='pt-5 pb-32 fonts'>
      <Slider />
      <StoreSections  className="container"/>
      <SpecialProduct />
      <AboutUs />
      <Trands />
      <SliderTrands />
      <News />
    </div>
  );
};

export default Home;