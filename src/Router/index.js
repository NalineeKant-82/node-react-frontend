import React from "react";
import { useRoutes } from "react-router-dom";
import Products from "../Products";
import SignUp from "../SignUp";
import UserDetails from "../userDetails";

const Router = () => {
  const routes = useRoutes([
    { path: "/login", element: <UserDetails /> },
    { path: "signup", element: <SignUp /> },
    { path: "/", element: <UserDetails /> },
    { path: "/products", element: <Products /> },
  ]);
  return routes;
};

export default Router;
