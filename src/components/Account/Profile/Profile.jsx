import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider";
import { AccountContainer } from "../../../Styles/Account/Profile/Profile.styled";
import UpdateProfile from "../../Authentication/UpdateProfile";

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <AccountContainer className="profile">
      <section className="profile__section profile__about">
        <div className="profile__about-name">
          <h3>Name</h3>
          <p>{currentUser.displayName}</p>
        </div>
        <div className="profile__about-email">
          <h3>Email</h3>
          <p>{currentUser.email}</p>
        </div>
        <Link to="/update-profile">Update Profile</Link>
      </section>
      <section className="profile__section profile__members">
        <h3>Perks of becoming a member</h3>
        <p>
          Gain access to everything. By joining, you agree to our Rrawen's
          &nbsp;
          <Link to="/">Terms & Conditions</Link> andLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam porta dui in turpis viverra ornare.
        </p>
        <button onClick="">Join now!</button>
      </section>
    </AccountContainer>
  );
}
