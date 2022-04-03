import React, { useState, useEffect } from "react";

import NavigationMain from "./components/Navigation/NavigationMain";
import axios from "axios";
import { AuthProvider } from "./Context/AuthProvider";

//global Context
import GlobalContext from "./Context/globalContext";

//styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles.styled";
import globalTheme from "./Styles/GlobalTheme.styled";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import UpdateProfile from "./components/Authentication/UpdateProfile";
import Register from "./components/Authentication/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import MyAccount from "./components/Navigation/MyAccount";
import SelectedProduct from "./components/SelectedProduct/SelectedProduct";
//components
import ProductsList from "./components/Products/ProductsList/ProductsList";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";

import ProductsComponent from "./Styles/Products/ProductsComponent.styled";
import LandingV2 from "./components/Landing/LandingV2";
import Profile from "./components/Account/Profile/Profile";
import Wishlist from "./components/Account/Wishlist/Wishlist";
import Orders from "./components/Account/Orders/Orders";
import { CartContextProvider } from "./Context/CartContextProvider";
import Checkout from "./components/Checkout/Checkout";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [hatProducts, setHatProducts] = useState([]);
  const [shoesProducts, setShoesProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products");
      setLoading(true);

      const response = await fetch(
        "https://store-3a04a-default-rtdb.firebaseio.com/products.json"
      );

      const responseData = await response.json();
      console.log("Fetched all products: ", responseData);

      let allProductsTemp = [];
      let womensProductsTemp = [];
      let mensProductsTemp = [];
      let hatProductsTemp = [];
      let shoesProductsTemp = [];
      // Loop through response data and categorize them into 4 seperate
      // variables which we pass to each product page
      for (let i = 0; i < responseData.length; i++) {
        let transformedProduct = {
          id: i,
          category: responseData[i].category,
          description: responseData[i].description,
          productId: responseData[i].id,
          image: responseData[i].image,
          name: responseData[i].name,
          price: responseData[i].price,
          rating: responseData[i].rating,
        };
        allProductsTemp.push(transformedProduct);
        if (transformedProduct.category.includes("Women's")) {
          womensProductsTemp.push(transformedProduct);
        } else if (transformedProduct.category.includes("Men's")) {
          mensProductsTemp.push(transformedProduct);
        } else if (transformedProduct.category.includes("Hats")) {
          hatProductsTemp.push(transformedProduct);
        } else if (transformedProduct.category.includes("Shoes")) {
          shoesProductsTemp.push(transformedProduct);
        }
      }
      setAllProducts(allProductsTemp);
      setWomensProducts(womensProductsTemp);
      setMensProducts(mensProductsTemp);
      setHatProducts(hatProductsTemp);
      setShoesProducts(shoesProductsTemp);

      console.log("Women's Products: ", womensProducts);
      console.log("Men's Products: ", mensProducts);
      console.log("Hat Products: ", hatProducts);
      console.log("Shoes Products: ", shoesProducts);
      console.log("All Products: ", allProducts);
      setLoading(false);
    };

    fetchProducts()
      .then((value) => {})
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Only fetch the wishlist once
  // FIXME
  useEffect(() => {
    console.log("Inside use effect wishlist");
    const fetchWishList = async () => {
      console.log("API WAS CALLED, GET WISHLIST");

      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE}/wishlist.json`
      );

      if (!response.ok) {
        throw new Error("No data acquired");
      }

      const responseData = await response.json();

      const loadedWishList = [];
      for (const key in responseData) {
        loadedWishList.push({
          id: key,
          productId: responseData[key].product.id,
          image: responseData[key].product.image,
          name: responseData[key].product.name,
          price: responseData[key].product.price,
          user: responseData[key].user,
        });
      }
      setWishList(loadedWishList);
      // setIsLoading(false);
    };

    fetchWishList().catch((error) => {
      // setIsLoading(false);
      // setHttpError(error.message);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        allProducts,
        loading,
        productsPerPage,
        setCurrentPage,
        // count,
        cartItems,
        setCartItems,
        wishList,
        setWishList,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <AuthProvider>
          <CartContextProvider>
            <NavigationMain />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<LandingV2 />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route
                  path="/my-account"
                  element={<MyAccount outlet={<Outlet />} />}
                >
                  <Route path="profile" element={<Profile />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="wishlist" element={<Wishlist />} />
                </Route>
              </Route>

              {/* We should probably move this into the /products */}
              <Route path="/items/:id" element={<SelectedProduct />} />

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
                    <ProductsList
                      classes="products__item products__item-list"
                      pageName="shoes"
                      products={shoesProducts}
                    />
                  }
                />
                <Route
                  path="hats"
                  element={
                    <ProductsList
                      classes="products__item products__item-list"
                      pageName="hats"
                      products={hatProducts}
                    />
                  }
                />
                <Route
                  path="mens"
                  element={
                    <ProductsList
                      classes="products__item products__item-list"
                      pageName="mens"
                      products={mensProducts}
                    />
                  }
                />
                <Route
                  path="womens"
                  element={
                    <ProductsList
                      classes="products__item products__item-list"
                      pageName="womens"
                      products={womensProducts}
                    />
                  }
                />
                <Route
                  path="new"
                  element={
                    <ProductsList
                      classes="products__item products__item-list"
                      pageName="new"
                      products={allProducts}
                    />
                  }
                />
              </Route>
            </Routes>
            <Footer />
          </CartContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
