import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider() {
  const [currentUser, setCurrentUser] = useState();
  // const [loading, setLoading] = useState(true);

  /*
    NOTE: 
    * You don't have to use the Firebase authentication API!
      You can replace the signup, login, logout, resetPassword, 
      updateEmail, updatePassword code with your own authentication API.
    * These functions return promises
  */

  // Signup using Firebase authentication API
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Login using Firebase authentication API
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Log out using Firebase authentication API
  function logout() {
    return auth.signOut();
  }

  // Reset password using Firebase authentication API
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // Update email using Firebase authentication API
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  // Update password using Firebase authentication API
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  /*
    * You only want this to trigger once (when this component gets mounted)
    * onAuthStateChanged returns a cleanup function you can use to unsubscribe
      when the component gets unmounted from the DOM
  */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // Only set isLoading to false once Firebase sets sets the user
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Specify the initial AuthContext values
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
