import React from "react";
import { Link } from "react-router-dom";
//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const NavigationTop = (props) => {
  // console.log(props)
  return (
    <div className={`${props.classes}-container`}>
      <div className="socialIcons">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
      <div className="account">
        <Link to="/login" className="account-link">
          <AccountBoxIcon />
          <span>My Account</span>
        </Link>
      </div>
    </div>
  );
};

export default NavigationTop;
