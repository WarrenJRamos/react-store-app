import React from "react";
import { useAuth } from "../../Context/AuthProvider";
import { MyAccountContainer } from "../../Styles/Account/MyAccount.styled";

export default function MyAccount() {
  const { currentUser } = useAuth();
  return (
    <MyAccountContainer>
      <h2>Hello, {currentUser.displayName} </h2>
      MyAccount
      <nav>
        <ul>
          <li><Link</li>
        </ul>
      </nav>
    </MyAccountContainer>
  );
}
