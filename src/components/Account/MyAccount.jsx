import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAuth } from "../../Context/AuthProvider";
import {
  MyAccountContainer,
  MyAccountContentContainer,
} from "../../Styles/Account/MyAccount.styled";

export default function MyAccount(props) {
  const { currentUser } = useAuth();
  const theme = useTheme();
  return (
    <MyAccountContainer
      font={theme.fonts.fontFamilyForm}
      colorMaize={theme.colors.colorMaize}
      colorCultured={theme.colors.colorCultured}
      colorTeal={theme.colors.colorTeal}
      colorFogra={theme.colors.colorFogra}
    >
      <div className="top">
        <h2>My Account</h2>
        <p>Welcome back, {currentUser.displayName} </p>
      </div>
      <div className="bottom">
        <nav className="sidenav">
          <ul className="sidenav__list">
            <li className="sidenav__list-item">
              <NavLink
                to="/my-account/profile"
                className={({ isActive }) => (isActive ? "link--active" : "")}
              >
                Profile
              </NavLink>
            </li>
            <li className="sidenav__list-item">
              <NavLink
                to="/my-account/orders"
                className={({ isActive }) => (isActive ? "link--active" : "")}
              >
                Orders
              </NavLink>
            </li>
            <li className="sidenav__list-item">
              <NavLink
                to="/my-account/wishlist"
                className={({ isActive }) => (isActive ? "link--active" : "")}
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </nav>
        <MyAccountContentContainer>{props.outlet}</MyAccountContentContainer>
      </div>
    </MyAccountContainer>
  );
}
