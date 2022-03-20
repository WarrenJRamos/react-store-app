import React, { useContext } from 'react';
import Product from './Product';
import globalContext from '../../../Context/globalContext';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../../../Styles/Products/ProductCard.styled';

const ProductsList = (props) => {
  const context = useContext(globalContext);
  const newProducts = context.newProducts;

  // console.log(newProducts);

  return (
    <div className={`${props.classes}`}>
      {newProducts ? (
        newProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
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
      )}

      {/* <ProductCard className='card-container'>
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
      </ProductCard> */}
    </div>
  );
};

export default ProductsList;
