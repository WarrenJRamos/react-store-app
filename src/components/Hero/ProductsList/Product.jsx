import React from 'react';
// import test from '../../../Images/Products/test.jpg';

//icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../../../Styles/Products/ProductCard.styled';

const Product = ({ product }) => {
  console.log(product);
  return (
    <ProductCard className='card-container'>
      <div className='img-container'>
        <img src={product.image} alt='cloting-img' />
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
