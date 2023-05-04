import React from "react";
import ProductList from "./components/Product/ProductList";
import Details from "./components/Product/Details";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import LandingPage from "./components/Landing Page/LandingPage";
import Checkout from "./components/Checkout";
import ComingSoon from "./components/ComingSoon";
import DefaultLayout from "./components/DefaultLayout";
import { useRoutes } from "react-router-dom";

const childrenRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/product", element: <ProductList /> },
  { path: "/details", element: <Details /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/comingsoon", element: <ComingSoon /> },
  { path: "*", element: <NotFound />}
];

const routes = [
  { path: "/", element: <DefaultLayout />, children: childrenRoutes },
];

const AppRoutes = () => useRoutes(routes);

export { childrenRoutes, AppRoutes };