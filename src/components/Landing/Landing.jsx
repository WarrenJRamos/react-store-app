import React from 'react';
import Carousel from './Carousel';
import LandingSale from './LandingSale';
import LandingComponent from '../../Styles/Landing/LandingComponent.styled';
const Landing = () => {
  return (
    <LandingComponent className='landing'>
      <Carousel classes='landing' />
      <LandingSale classes='landing' />
    </LandingComponent>
  );
};

export default Landing;
