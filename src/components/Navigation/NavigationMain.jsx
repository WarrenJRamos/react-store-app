import React from "react";
import { Link, NavLink } from "react-router-dom";
//components
import NavigationTop from "./NavigationTop";
//styles and icons
import { NavContainer } from "../../Styles/Navigation/NavContainer.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuListComposition from "../Account/MenuListComposition";
import { useAuth } from "../../Context/AuthProvider";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const NavigationMain = () => {
  const { currentUser, logout } = useAuth();

  return (
    <NavContainer className="nav">
      {/* <NavigationTop classes={"nav__top"} /> */}
      <div className="nav__main">
        <div className="title">
          {/* maybe logo? */}
          <NavLink to="/home" className="item">
            <span>Rrawen</span>
          </NavLink>
        </div>
        <div className="nav-container">
          <ul className="list">
            <li>
              <NavLink to="/products/new" className="item">
                New
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/womens" className="item">
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/mens" className="item">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/shoes" className="item">
                Shoes
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="actions">
          <div className="account">
            <AccountBoxIcon />
            {currentUser ? (
              <MenuListComposition />
            ) : (
              <p>
                Hi, <Link to="/login">Sign in on Register</Link>
              </p>
            )}
          </div>
          <div className="cart">
            <ShoppingCart />
            <StarBorderIcon />
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default NavigationMain;
