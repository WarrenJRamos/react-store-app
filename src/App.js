import React, { useState, useEffect } from 'react';

import NavigationMain from './components/Navigation/NavigationMain';

import { AuthProvider, useAuth } from './Context/AuthProvider';

//global Context
import GlobalContext from './Context/globalContext';

//styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles.styled';
import globalTheme from './Styles/GlobalTheme.styled';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';

//components
import ProductList from './components/Hero/ProductsList/ProductsList';
import Products from './components/Hero/Products';
import Footer from './components/Footer/Footer';
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";

import ProductsComponent from './Styles/Products/ProductsComponent.styled';
function App() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then((res) => res.json())
      .then((data) => setNewProducts(data));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        newProducts,
        setNewProducts,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <AuthProvider>
          <NavigationMain />
          {/* Dummy Links */}
          {/* <Link to='/signup'>Signup</Link>
          <br />
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/products'>Products</Link>
          <br />
          <Link to='/products/shoes'>Products/shoes</Link>
          <br />
          <Link to='/products/mens'>Products/mens</Link>
          <br />
          <Link to='/products/shoes'>Products/womens</Link>
          <br /> */}

          {/* Routes */}
          <ProductsComponent className='products'>
            <Routes>
              <Route path='/' element={<Navigate to='/signup' />} />
              {/* <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> */}
              <Route
                path='/products/*'
                element={
                  <>
                    <Products classes='products' />
                    <Outlet />
                  </>
                }
              >
                <Route
                  path='shoes'
                  element={
                    <ProductList classes='products__item products__item-list' />
                  }
                />
                <Route
                  path='mens'
                  element={
                    <ProductList classes='products__item products__item-list' />
                  }
                />
                <Route
                  path='womens'
                  element={
                    <ProductList classes='products__item products__item-list' />
                  }
                />
                <Route
                  path='new'
                  element={
                    <ProductList classes='products__item products__item-list' />
                  }
                />
              </Route>
            </Routes>
          </ProductsComponent>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
