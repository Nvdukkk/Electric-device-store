import React from "react";
import ProductList from "../components/Product/ProductList";
import Details from "../components/Product/Details";
import Cart from "../components/Cart/Cart";
import NotFound from "../components/NotFound";
import LandingPage from "../components/Landing Page/LandingPage";
import ComingSoon from "../components/ComingSoon";
import DefaultLayout from "../components/DefaultLayout";
import { useRoutes } from "react-router-dom";
import CheckAccess from "./CheckAccess";

const childrenRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/product", element: <ProductList /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/cart", element: <Cart /> },
  { path: "/comingsoon", element: <ComingSoon /> },
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
  { path: "/", element: <DefaultLayout />, children: childrenRoutes },
];

const AppRoutes = () => useRoutes(routes);

export default AppRoutes;
