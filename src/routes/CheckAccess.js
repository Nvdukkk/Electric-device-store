import { useContext } from "react";
import { ProductContext } from "../context";
import { Navigate } from "react-router-dom";
import React from "react";
import Checkout from "../components/Checkout";
import OrderSuccess from "../components/OrderSucces";
import NotFound from "../components/NotFound";

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
  
export default CheckAccess
