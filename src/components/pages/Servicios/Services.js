import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjTwo} from './Data';
import Price from '../../Price';
const Services = () => {
  return (
    <>
      <HeroSection {...homeObjTwo}/>
      <Price />;
       
    </>
  )
}

export default Services;