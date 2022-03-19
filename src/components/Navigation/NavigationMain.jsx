import React from "react";
import { NavLink } from "react-router-dom";
//components
import NavigationTop from "./NavigationTop";
//styles and icons
import { NavContainer } from "../../Styles/Navigation/NavContainer.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const NavigationMain = () => {
  return (
    <NavContainer className="nav">
      <NavigationTop classes={"nav__top"} />
      <div className="nav__main">
        <div className="title">
          {/* maybe logo? */}
          <span>Rrawen</span>
        </div>
        <div className="container">
          <ul className="list">
            <li>
              <NavLink to="/new" className="item">
                New
              </NavLink>
            </li>
            <li>
              <NavLink to="/women" className="item">
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/men" className="item">
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/jewelery" className="item">
                Jewelery
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="cart">
          <ShoppingCartIcon />
          <StarBorderIcon />
        </div>
      </div>
    </NavContainer>
  );
};

export default NavigationMain;
