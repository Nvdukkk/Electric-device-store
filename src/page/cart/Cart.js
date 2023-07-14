import React from "react";
import Title from "../../components/Title";
import CartColumns from "../../components/Cart/CartColumn";
import EmptyCart from "../../components/Cart/EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "../../components/Cart/CartList";
import CartTotals from "../../components/Cart/CartTotals";

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
