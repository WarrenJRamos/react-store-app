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
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import UpdateProfile from "./components/Authentication/UpdateProfile";

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
          {/* Dummy Links */}
          <Link to="/signup">Signup</Link>
          <br />
          <Link to="/login">Login</Link>
          <br />
          <Link to="/forgot-password">Forgot Password</Link>
          <br />
          <Link to="/update-profile">Update Profile</Link>
          <br />
          <Link to="/products">Products</Link>
          <br />
          <Link to="/products/shoes">Products/shoes</Link>
          <br />
          <Link to="/products/mens">Products/mens</Link>
          <br />
          <Link to="/products/shoes">Products/womens</Link>
          <br />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />

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
