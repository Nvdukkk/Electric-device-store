import React, { createContext, useEffect, useState } from "react";
import { storeProducts } from "./data";
import {
  getCartItemsValues,
  removeAllLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageCount,
  setLocalStorageItem,
  setLocalStorageTotal,
} from "./utils";
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(storeProducts);
  const localStorageValues = getCartItemsValues();
  const [cart, setCart] = useState(localStorageValues);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(storeProducts);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isAllowed, setIsAllowed] = useState(false);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };



  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price * product.count;
    setCart([...cart, product]);
    setLocalStorageItem(id, product);
    
  };

  const addTotals = () => {
    const subTotal = cart.reduce((total, item) => total + item.total, 0);
    const discount = parseFloat(subTotal * 0.1);
    const total = subTotal - discount;
    setCartSubTotal(subTotal.toLocaleString("vi-VN"));
    setCartDiscount(discount.toLocaleString("vi-VN"));
    setCartTotal(total.toLocaleString("vi-VN"));
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart(tempCart);
    addTotals();
    setLocalStorageCount(id, product.count);
    setLocalStorageTotal(id, product.total);
  };

  const handleInputChange = (e, id) => {
    let tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    const product = tempCart[index];
    const inputValue = parseInt(e.target?.value);
    product.count = inputValue;
    product.total = product.count * product.price;
    addTotals();
    setLocalStorageCount(id, product.count);
    setLocalStorageTotal(id, product.total);
    if (isNaN(product.count)) {
      product.count = 0;
      product.total = product.count * product.price;
      addTotals();
      setLocalStorageCount(id, product.count);
      setLocalStorageTotal(id, product.total);
    }
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const index = tempCart.findIndex((item) => item.id === id);
    const product = tempCart[index];
    product.count = product.count - 1;
    setLocalStorageCount(id, product.count);
    setLocalStorageTotal(id, product.total);
    if (product.count < 1) {
      removeLocalStorageItem(id);
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setLocalStorageTotal(id, product.total);
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
    removeLocalStorageItem(id);
    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    let tempCart = [...cart];
    tempCart.forEach((item) => {
      item.inCart = false;
    });
    setCart([]);
    setProducts(() => {
      let tempProducts = [];
      storeProducts.forEach((item) => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });
      return tempProducts;
    });
    removeAllLocalStorageItem();
  };
  useEffect(() => {
    addTotals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  
  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        modalOpen,
        modalProduct,
        cartSubTotal,
        cartDiscount,
        cartTotal,
        isAllowed,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
        setIsAllowed,
        handleInputChange,
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
