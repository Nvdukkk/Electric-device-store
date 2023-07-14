import { useContext } from "react";
import { ProductContext } from "../context";
import { Navigate } from "react-router-dom";
import React from "react";
import Checkout from "../page/checkout/Checkout";
import OrderSuccess from "../page/order-success/OrderSuccess";
import NotFound from "../page/404/NotFound";

const CheckAccess = ({ path }) => {
  const { isAllowed } = useContext(ProductContext);

  if (!isAllowed) {
    return <Navigate to="/404" replace />;
  }

  let Element = null;
  if (path === "/checkout") {
    Element = Checkout;
  } else if (path === "/order-success") {
    Element = OrderSuccess;
  } else {
    Element = NotFound;
  }

  return <Element />;
};

export default CheckAccess;
