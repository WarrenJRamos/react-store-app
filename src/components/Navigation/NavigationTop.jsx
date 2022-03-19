import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Alert, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthProvider";
const NavigationTop = (props) => {
  // console.log(props)
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // if (currentUser) {
  //   console.log(currentUser);
  // }

  async function onLogoutHandler() {
    setErrorMessage("");
    try {
      await logout();
      navigate("/");
    } catch {
      return setErrorMessage("Failed to log out");
    }
  }

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
          <span>{currentUser ? currentUser.displayName : "My Account"}</span>
        </Link>
      </div>
      <Button variant="link" onClick={onLogoutHandler}>
        Logout
      </Button>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default NavigationTop;
