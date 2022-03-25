import React from 'react';
// import test from '../../../Images/Products/test.jpg';
import { NavLink } from 'react-router-dom';
//icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../../../Styles/Products/ProductCard.styled';

const Product = ({ product }) => {
  return (
    <ProductCard className='card-container'>
      <div className='img-container'>
        <NavLink to={`/product/${product.id}`}>
          <img src={product.image} alt='cloting-img' />
        </NavLink>
      </div>
      <div className='bottom'>
        <div className='bottom-title'>
          <span>{product.category}</span>
          <FavoriteBorderIcon className='fav' />
        </div>
        <div className='bottom-price'>
          <span>${product.price}</span>
          <AddShoppingCartIcon className='cart' />
        </div>
      </div>
    </ProductCard>
  );
};

export default Product;
