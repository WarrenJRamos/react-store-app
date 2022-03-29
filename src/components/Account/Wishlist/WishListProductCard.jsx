import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../../../Context/CartContextProvider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WishCard from '../../../Styles/Account/Profile/WishListCard';
const WishListProductCard = ({ product, setWishList }) => {
  const cartContext = useContext(CartContext);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const amountInputRef = useRef();

  const addToCartClickHandler = (event) => {
    event.preventDefault();
    // console.log("Adding item to cart");
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }

    cartContext.addItem({
      id: product.id,
      // name = title
      name: product.title,
      amount: enteredAmountNumber,
      price: product.price,
      // description: product.description,
      // category: product.category,
      image: product.image,
      // rating: {
      //   ...product.rating,
      // },
    });
  };

  const removeFavorite = (id) => {
    setWishList((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  };
  return (
    <WishCard className='card-container'>
      <button onClick={() => removeFavorite(product.id)}>
        <FavoriteIcon className='icon' />
      </button>
      <div className='img-container'>
        <NavLink to={`/product/${product.id}`}>
          <img src={product.image} alt='cloting-img' />
        </NavLink>
      </div>
      <div className='bottom-div'>
        <div className='bottom-title'>
          <span>{product.name}</span>
        </div>

        <div className='bottom-price'>
          <span>${product.price}</span>
          <form onSubmit={addToCartClickHandler}>
            <input
              ref={amountInputRef}
              label='Amount'
              id={`amount_${product.id}`}
              style={{ width: '40px' }}
              type='number'
              min='1'
              max='5'
              step='1'
              defaultValue='1'
            />
            <button type='submit'>
              <AddShoppingCartIcon className='cart' />
            </button>
          </form>
        </div>
      </div>
    </WishCard>
  );
};

export default WishListProductCard;
