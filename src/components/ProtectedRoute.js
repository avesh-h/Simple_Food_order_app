import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "./Login/loginForm";

const ProtectedRoute = ({ ...props }) => {
  const isAuth = localStorage.getItem("loggedIn");
  return (
    <div>{isAuth !== null ? props.children : <Navigate to="/login" />}</div>
  );
};

export default ProtectedRoute;
