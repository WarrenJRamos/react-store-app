import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import test from '../../Images/Products/test.jpg';

import ProductCard from '../../Styles/Products/ProductCard.styled';

const LandingSale = (props) => {
  return (
    <div className={`${props.classes}-sale`}>
      <div className='title'>
        <span>Trending</span>
      </div>
      <div className='sale-cards'>
        {/* will add a card component in future */}

        <div className='card-container'>
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
        </div>
        <div className='card-container'>
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
        </div>
        <div className='card-container'>
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
        </div>
      </div>
    </div>
  );
};

export default LandingSale;
