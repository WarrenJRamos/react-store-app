import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth as useAuthContext } from "./Context/AuthProvider";

const useAuth = () => {
  const { currentUser } = useAuthContext();
  // console.log(context.isAuthenticated)
  // console.log(context.authToken)
  return currentUser ? true : false;
};

const ProtectedRoutes = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
