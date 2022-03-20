import React, { useState, useEffect } from "react";

import NavigationMain from "./components/Navigation/NavigationMain";

import { AuthProvider, useAuth } from "./Context/AuthProvider";

//global Context
import GlobalContext from "./Context/globalContext";

//styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles.styled";
import globalTheme from "./Styles/GlobalTheme.styled";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import UpdateProfile from "./components/Authentication/UpdateProfile";
import Register from "./components/Authentication/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import MyAccount from "./components/Account/MyAccount";
import MenuListComposition from "./components/Account/MenuListComposition";

//components
import ProductList from "./components/Hero/ProductsList/ProductsList";
import Products from "./components/Hero/Products";
import Footer from "./components/Footer/Footer";
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";

import ProductsComponent from "./Styles/Products/ProductsComponent.styled";
import Landing from "./components/Landing/Landing";
import LandingV2 from "./components/Landing/LandingV2";
function App() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
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

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<LandingV2 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/my-account" element={<MyAccount />} />
            </Route>
            <Route
              path="/products/*"
              element={
                <ProductsComponent className="products">
                  <Products classes="products" />
                  <Outlet />
                </ProductsComponent>
              }
            >
              <Route
                path="shoes"
                element={
                  <ProductList classes="products__item products__item-list" />
                }
              />
              <Route
                path="mens"
                element={
                  <ProductList classes="products__item products__item-list" />
                }
              />
              <Route
                path="womens"
                element={
                  <ProductList classes="products__item products__item-list" />
                }
              />
              <Route
                path="new"
                element={
                  <ProductList classes="products__item products__item-list" />
                }
              />
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
