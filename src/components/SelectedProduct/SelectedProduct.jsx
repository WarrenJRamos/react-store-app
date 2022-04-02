import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../../Context/CartContextProvider';
import { useAuth } from '../../Context/AuthProvider';
import { SelectedComponent } from '../../Styles/SlectedProduct/SelectedComponent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import DiamondIcon from '@mui/icons-material/Diamond';
import Radio from '@mui/material/Radio';
import { Snackbar } from '@mui/material';

const SelectedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectedValue, setSelectedValue] = useState('m');
  const cartContext = useContext(CartContext);
  const { currentUser } = useAuth();
  const [snackbarIsActive, setSnackbarIsActive] = useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const id = useParams().id - 1;
  // console.log(id);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://store-3a04a-default-rtdb.firebaseio.com/products/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  const postWishList = async () => {
    console.log('API WAS CALLED, POST WISHLIST ITEM');
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/wishlist.json`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: currentUser.displayName,
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          },
        }),
      }
    );
    const responseData = response.json();
  };
  const addToWishListHandler = (product) => {
    // postWishList();
    // .then((value) => {
    //   console.log(value);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
    console.log(product);
  };

  const handleSnackbarClose = () => {
    setSnackbarIsActive(false);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setSnackbarIsActive(true);
    cartContext.addItem({
      id: product.id,
      name: product.name,
      amount: 1,
      price: product.price,
      image: product.image,
    });
  };

  if (isLoading) return <h2>Loading, Please Wait...</h2>;

  const interest = Math.round((product.price / 4 + Number.EPSILON) * 100) / 100;
  //   const interest = (product.price / 4).toFixed(2);
  // console.log(product);
  return (
    <SelectedComponent>
      <div className='img-container'>
        <div>
          <img src={product.image} />
        </div>
      </div>
      <div className='content'>
        <h1>{product.category}</h1>
        <span className='content-name'>{product.name}</span>
        <div className='content-price'>
          <span className='span1'>${product.price}</span>
          <span className='span2'>
            <LocalShippingIcon /> Free Shipping
          </span>
        </div>
        <div className='content-interest'>
          <span className='payment'>
            or 4 interest-free payments of ${interest} with
          </span>
          <span className='pay'>
            <DiamondIcon />
            Pay
          </span>
        </div>
        <div className='content-desc'>{product.description}</div>
        <div className='content-size'>
          <div className='picker'>
            <Radio {...controlProps('a')} label='small' />
            <Radio {...controlProps('b')} />
            <Radio {...controlProps('c')} />
            <Radio {...controlProps('d')} />
          </div>
          <div className='chart'>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div>
        <div className='content-buttons'>
          <button className='cart-btn' onClick={handleAddToCart}>
            <ShoppingCartIcon />
            Add to Cart
          </button>
          <div className='wish-btn'>
            <span>
              <AddIcon className='add' />
            </span>
            <button onClick={addToWishListHandler}>Add to Wish List</button>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarIsActive}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={`Added ${product.name} to Cart`}
      />
    </SelectedComponent>
  );
};

export default SelectedProduct;
