import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  /*
    NOTE: 
    * You don't have to use the Firebase authentication API!
      You can replace the signup, login, logout, resetPassword, 
      updateEmail, updatePassword code with your own authentication API.
    * These functions return promises
  */

  // Signup using Firebase authentication API
  function signup(email, name, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      // You also want to update the profile with the name they entered
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
  }

  // Login using Firebase authentication API
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log out using Firebase authentication API
  function logout() {
    return signOut(auth);
  }

  // Reset password using Firebase authentication API
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // Update email using Firebase authentication API
  function updateUserEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  // Update password using Firebase authentication API
  function updateUserPassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  /*
    * You only want this to trigger once (when this component gets mounted)
    * onAuthStateChanged returns a cleanup function you can use to unsubscribe
      when the component gets unmounted from the DOM
  */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
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
    updateUserEmail,
    updateUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  );
}
