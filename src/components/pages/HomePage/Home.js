import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data';
import Price from '../../Price';
const Home = () => {
  return (
    <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjThree}/>
        <Price />;
        <HeroSection {...homeObjFour}/>
    </>
  )
}

export default Home;