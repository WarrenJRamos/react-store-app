import React, { useContext } from 'react';
import { AccountContainer } from '../../../Styles/Account/Profile/Profile.styled';
import WishListProductCard from './WishListProductCard';
import globalContext from '../../../Context/globalContext';
export default function Wishlist() {
  const context = useContext(globalContext);
  const wishList = context.wishList;

  return (
    <AccountContainer className='wishlist'>
      <h3>Wishlist</h3>
      <div className='container'>
        {wishList.map((product) => (
          <WishListProductCard key={product.id} product={product} />
        ))}
      </div>
    </AccountContainer>
  );
}
