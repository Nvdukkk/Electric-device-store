import React, { createContext, useEffect, useState } from "react";
import { storeProducts } from "./data";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(storeProducts);
  const [detailProduct, setDetailProduct] = useState(storeProducts);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(storeProducts);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const addTotals = () => {
    const subTotal = cart.reduce((a, item) => {
      return a + item.total;
    }, 0);
    const tempDiscount = subTotal * 0.1;
    const discount = parseFloat(tempDiscount.toFixed(2));
    const total = subTotal - discount;
    setCartSubTotal(subTotal);
    setCartDiscount(discount);
    setCartTotal(total);
  }

  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price * product.count;
    setCart([...cart, product]);
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    console.log('open');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log('close');
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart(tempCart);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
      addTotals();
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    setProducts(() => {
      let tempProducts = [];
      storeProducts.forEach((item) => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });
      return tempProducts;
    });
    addTotals();
  };
  useEffect(() => {
    addTotals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartDiscount,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
