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
import ProductList from "./components/Products/ProductsList/ProductsList";
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

function App() {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [womensProducts, setWomensProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [hatProducts, sethatProducts] = useState([]);
  const [shoesProducts, setShoesProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("/products/new");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3333/products");
      setAllProducts(res.data);
      // const productsDummy = p.Products;
      // console.log(productsDummy);
      // setAllProducts(productsDummy);
      setWomensProducts(
        res.data.filter((items) => items.category.includes("Women's"))
        // productsDummy.filter((items) => items.category.includes("Women's"))
      );
      setMensProducts(
        res.data.filter((items) => items.category.includes("Men's"))
        // productsDummy.filter((items) => items.category.includes("Men's"))
      );
      sethatProducts(
        res.data.filter((items) => items.category.includes("Hats"))
        // productsDummy.filter((items) => items.category.includes("Hats"))
      );
      setShoesProducts(
        res.data.filter((items) => items.category.includes("Shoes"))
        // productsDummy.filter((items) => items.category.includes("Shoes"))
      );
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // console.log(allProducts);
  // console.log(filterCategory);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let count;
  let currentPageProducts;
  if (filterCategory === "/products/new") {
    count = Math.ceil(allProducts.length / productsPerPage);
    currentPageProducts = allProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  } else if (filterCategory === "/products/womens") {
    count = Math.ceil(womensProducts.length / productsPerPage);
    currentPageProducts = womensProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  } else if (filterCategory === "/products/mens") {
    count = Math.ceil(mensProducts.length / productsPerPage);
    currentPageProducts = mensProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  } else if (filterCategory === "/products/hats") {
    count = Math.ceil(hatProducts.length / productsPerPage);
    currentPageProducts = hatProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  } else if (filterCategory === "/products/shoes") {
    count = Math.ceil(shoesProducts.length / productsPerPage);
    currentPageProducts = shoesProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        allProducts,
        setAllProducts,
        loading,
        currentPageProducts,
        productsPerPage,
        setCurrentPage,
        setFilterCategory,
        count,
        cartItems,
        setCartItems,
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
              <Route path="/product/:id" element={<SelectedProduct />} />

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
                  path="hats"
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
          </CartContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
