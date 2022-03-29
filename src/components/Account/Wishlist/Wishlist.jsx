import React, { useContext } from 'react';
import { AccountContainer } from '../../../Styles/Account/Profile/Profile.styled';
import WishListProductCard from './WishListProductCard';
import globalContext from '../../../Context/globalContext';
export default function Wishlist() {
  const context = useContext(globalContext);
  const wishList = context.wishList;
  const setWishList = context.setWishList;
  const handleClearWishList = () => {
    setWishList([]);
  };

  return (
    <AccountContainer className='wishlist'>
      <h3>Wishlist</h3>
      <div className='container'>
        {wishList.map((product) => (
          <WishListProductCard
            key={product.id}
            product={product}
            setWishList={setWishList}
          />
        ))}
      </div>
      {wishList.length > 2 && (
        <div className='button'>
          <button onClick={handleClearWishList}>Clear All</button>
        </div>
      )}
    </AccountContainer>
  );
}
