import React, { useState } from "react";

// import {Routes, Route } from "react-router-dom";
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

function App() {
  const [test, setTest] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        test,
        setTest,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <AuthProvider>
          <NavigationMain />
          {/* <Link to="/products">Products</Link>
          <br />
          <Link to="/products/shoes">Products/shoes</Link>
          <br />
          <Link to="/products/mens">Products/mens</Link>
          <br />
          <Link to="/products/shoes">Products/womens</Link>
          <br /> */}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<h1>HOME</h1>} />
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
                <div>
                  Products List
                  <Outlet />
                </div>
              }
            >
              <Route path="shoes" element={<div>Shoes Component</div>} />
              <Route path="mens" element={<div>Mens Component</div>} />
              <Route path="womens" element={<div>Womens Component</div>} />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
