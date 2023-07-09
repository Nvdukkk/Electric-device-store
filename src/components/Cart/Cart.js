import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        if (cart.length > 0) {
          return (
            <>
              <Title title="Giỏ hàng" />
              <CartColumns />
              <CartList value={value} />
              <CartTotals value={value} />
            </>
          );
        } else {
          return <EmptyCart />
        }
      }}
    </ProductConsumer>
  );
}
