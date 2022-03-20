import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import landing1 from '../../Images/Landing/landing1.jpg';
import landing2 from '../../Images/Landing/landing2.jpg';
import landing3 from '../../Images/Landing/landing3.jpg';

const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={`${props.classes}-carousel`}>
      <div>
        <img src={landing1} alt='landing-img' />
      </div>
      <div>
        <img src={landing2} alt='landing-img' />
      </div>
      <div>
        <img src={landing3} alt='landing-img' />
      </div>
    </Slider>
  );
};

export default Carousel;
