import React from 'react';
import { useLocation } from 'react-router-dom';
import productsDefault from '../../../Images/Products/products1.jpg';
import products1 from '../../../Images/Products/mens.jpg';
import products2 from '../../../Images/Products/womens.jpg';

const ProductsImg = (props) => {
  const location = useLocation();
  // console.log(location.pathname);
  let img = productsDefault;
  if (location.pathname === '/products/womens') {
    img = products2;
  } else if (location.pathname === '/products/mens') {
    img = products1;
  }
  return (
    <div className={`${props.classes}`}>
      <img src={img} alt='new-items-img' className='img-container' />
      <div className='overlay'></div>
    </div>
  );
};

export default ProductsImg;
