import React, { useContext } from 'react';
// import test from '../../../Images/Products/test.jpg';
import { NavLink } from 'react-router-dom';
//icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductCard from '../../../Styles/Products/ProductCard.styled';
import globalContext from '../../../Context/globalContext';

const Product = ({ product }) => {
  const context = useContext(globalContext);
  const setCartItems = context.setCartItems;

  const handleClick = (product) => {
    setCartItems((prev) => {
      const cartArr = [...prev];
      cartArr.push(product);
      return cartArr;
    });
  };

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
          {/* <input
            style={{ width: '40px' }}
            type='number'
            min='1'
            max='5'
            step='1'
          /> */}
          <button onClick={() => handleClick(product)}>
            <AddShoppingCartIcon className='cart' />
          </button>
        </div>
      </div>
    </ProductCard>
  );
};

export default Product;
