import Home from "../page";
import Cart from "../page/cart/Cart";
import ProductList from "../page/product/Product";
import Details from "../page/details/Details";
import NotFound from "../page/404/NotFound";
import ComingSoon from "../page/coming-soon/ComingSoon";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Setting from "../page/setting/Setting";

import React from "react";
import { useRoutes } from "react-router-dom";
import CheckAccess from "./CheckAccess";

import DefaultLayout from "../layout/DefaultLayout";
import FullBackgroundLayout from "../layout/FullBackgroundLayout";

const defaultChildren = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <ProductList /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/cart", element: <Cart /> },
  { path: "/setting", element: <Setting /> },
];
const fullBackGroundChildren = [
  { path: "/comingsoon", element: <ComingSoon /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/checkout",
    element: <CheckAccess path="/checkout" />,
  },
  {
    path: "/order-success",
    element: <CheckAccess path="/order-success" />,
  },

  { path: "*", element: <NotFound /> },
];
const routes = [
  { element: <DefaultLayout />, children: defaultChildren },
  { element: <FullBackgroundLayout />, children: fullBackGroundChildren },
];

const AppRoutes = () => useRoutes(routes);

export default AppRoutes;
