import React from 'react';
import HeroSection from '../../HeroSection';

import {homeObjTwo,homeObjOne} from './Data';

const Products = () => {
  return (
    <>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjOne}/>
    </>
  )
}

export default Products;