import React from 'react';
import test from '../../../Images/Products/test.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../../../Styles/Products/ProductCard.styled';
// import ProductsComponent from '../../../Styles/Products/ProductsComponent.styled'

const ProductsList = (props) => {
  return (
    <div className={`${props.classes}`}>
      <ProductCard className='card-container'>
        <div className='img-container'>
          <img src={test} alt='cloting-img' />
        </div>
        <div className='bottom'>
          <div className='bottom-title'>
            <span>Random item name</span>
            <FavoriteBorderIcon className='fav' />
          </div>
          <div className='bottom-price'>
            <span>$55.45</span>
            <AddShoppingCartIcon className='cart' />
          </div>
        </div>
      </ProductCard>
      <ProductCard className='card-container'>
        <div className='img-container'>
          <img src={test} alt='cloting-img' />
        </div>
        <div className='bottom'>
          <div className='bottom-title'>
            <span>Random item name</span>
            <FavoriteBorderIcon className='fav' />
          </div>
          <div className='bottom-price'>
            <span>$55.45</span>
            <AddShoppingCartIcon className='cart' />
          </div>
        </div>
      </ProductCard>
      <ProductCard className='card-container'>
        <div className='img-container'>
          <img src={test} alt='cloting-img' />
        </div>
        <div className='bottom'>
          <div className='bottom-title'>
            <span>Random item name</span>
            <FavoriteBorderIcon className='fav' />
          </div>
          <div className='bottom-price'>
            <span>$55.45</span>
            <AddShoppingCartIcon className='cart' />
          </div>
        </div>
      </ProductCard>
      <ProductCard className='card-container'>
        <div className='img-container'>
          <img src={test} alt='cloting-img' />
        </div>
        <div className='bottom'>
          <div className='bottom-title'>
            <span>Random item name</span>
            <FavoriteBorderIcon className='fav' />
          </div>
          <div className='bottom-price'>
            <span>$55.45</span>
            <AddShoppingCartIcon className='cart' />
          </div>
        </div>
      </ProductCard>
      <ProductCard className='card-container'>
        <div className='img-container'>
          <img src={test} alt='cloting-img' />
        </div>
        <div className='bottom'>
          <div className='bottom-title'>
            <span>Random item name</span>
            <FavoriteBorderIcon className='fav' />
          </div>
          <div className='bottom-price'>
            <span>$55.45</span>
            <AddShoppingCartIcon className='cart' />
          </div>
        </div>
      </ProductCard>
    </div>
  );
};

export default ProductsList;
